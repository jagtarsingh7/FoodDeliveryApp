import React, { Component,useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity , TextInput, ScrollView} from "react-native";
import {auth} from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function EmailSignIn({navigation}) {

  const [email, setEmail]=useState('hi');
  const [password, setPassword]=useState('kk');

  
  SignInByEmail=()=>{

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("success");
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  };

   
  SignUpNavigation=()=>{

    navigation.navigate('SignUp');

  };




  return (
    <View style={styles.container}>

      <View style={styles.materialHeader1Stack}>

        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View
              style={styles.materialHelperTextBox1}
            >
                    <TextInput placeholder="Enter Email" onChangeText={(val)=>setEmail(val)} style={styles.inputStyle}></TextInput>
            </View>
            <View
              style={styles.materialHelperTextBox2}
            >
                    <TextInput placeholder="Enter password" secureTextEntry={true} onChangeText={(val)=>setPassword(val)} style={styles.inputStyle}></TextInput>
            </View>
           
            <TouchableOpacity
              style={styles.materialButtonDanger13}
              onPress={this.SignInByEmail}
            >
                    <Text style={styles.inputStyle}>Sign In</Text>

            </TouchableOpacity>


            

            <TouchableOpacity
              style={styles.materialButtonDanger14}
              onPress={this.SignUpNavigation}
            >
                    <Text style={styles.inputStyle}>Create Account</Text>

            </TouchableOpacity>
          </ScrollView>




        </View>

      </View>
      <View style={styles.rect}></View>
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    left: 0,
    width: 375,
    height: 628,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    top: 55
  },
  scrollArea_contentContainerStyle: {
    height: 628,
    width: 375
  },




  materialHelperTextBox1: {
    height: 90,
    width: 295,
    marginTop: 9,
    marginLeft: 40,
    backgroundColor: "transparent"
  },
  materialHelperTextBox2: {
    height: 90,
    width: 295,
    marginTop: 12,
    marginLeft: 40
  },
  materialHelperTextBox3: {
    height: 90,
    width: 295,
    marginTop: 11,
    marginLeft: 40
  },
  materialHelperTextBox4: {
    height: 90,
    width: 295,
    marginTop: 9,
    marginLeft: 40
  },
  materialButtonDanger13: {
    height: 43,
    width: 100,
    marginTop: 34,
    marginLeft: 138
  },
  materialButtonDanger14: {
    height: 43,
    width: 100,
    marginTop: 54,
    marginLeft: 138
  },
  materialHeader1Stack: {
    top: 41,
    left: 0,
    height: 683,
    position: "absolute",
    right: 0
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 375
  }
});

export default EmailSignIn;
