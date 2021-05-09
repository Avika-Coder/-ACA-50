import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,Button } from 'react-native';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter your registered email"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                 <View style={styles.divider}></View>
                  <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry
                    placeholder="Enter password"
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                /></View> 
              <View><Text> <Button
          title=" Log In "
          color="blue"
          onPress={() => alert('An error has occured')}
        /></Text>
              </View>
              <View style={styles.container}>
                  <View style={styles.line}></View>
                  <Text style={styles.text}>OR</Text>
                  <View style={styles.line}></View>
               </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },
    form: {
        marginVertical: 35,
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    divider: {
        paddingVertical: 12,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
    ,
    line: {
        backgroundColor: '#E3E3E3',
        height:1,
        width:'45%',
    
    },

});

