import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


import {auth} from "../firebase/firebase";
import { GoogleAuthProvider, signInWithRedirect , getRedirectResult } from "firebase/auth";

function SignIn({navigation }) {
  auth.useDeviceLanguage();




  googleSignIn=()=>{
    
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("success");

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };



  FacebookSignIn=()=>{
    console.log("Not available Facebook");
  };
  YahooSignIn=()=>{
    console.log("Not available Yahooo");

  };

  EmailSignInNavigation=()=>{

    navigation.navigate('EmailSignIn');
  };


  return (
    <View style={styles.container}>      
      <TouchableOpacity
        style={styles.materialButtonGoogle}
        onPress={this.googleSignIn}
      >
              <Text style={styles.textFonts}>Google</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.materialButtonFacebook}
        onPress={this.FacebookSignIn}
      >
              <Text style={styles.textFonts}>Facebook</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.materialButtonYahoo}
        onPress={this.YahooSignIn}
      >
              <Text style={styles.textFonts}>Yahoo</Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.materialButtonEmail}
        onPress={this.EmailSignInNavigation}
      >   
              <Text style={styles.textFonts}>Email</Text>
      </TouchableOpacity>








    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonGoogle: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    width: 158,
    marginTop: 421,
    marginLeft: 97
  },
  materialButtonFacebook: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    width: 158,
    marginTop: 28,
    marginLeft: 97
  },
  materialButtonYahoo: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    width: 158,
    marginTop: 96,
    marginLeft: 97
  },
  materialButtonEmail: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    width: 158,
    marginTop: -105,
    marginLeft: 97
  },
  textFonts: {
    color: "#fff",
    fontSize: 14
  }
});

export default SignIn;
