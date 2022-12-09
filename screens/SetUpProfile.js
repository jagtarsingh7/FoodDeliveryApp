import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SignUp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialHeader1Stack}>

        <View style={styles.scrollArea}>
          <FlatList
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Icon name="user-circle" style={styles.icon}></Icon>

            <View
              style={styles.materialHelperTextBox1}
            >
                    <TextInput placeholder="Enter Name" style={styles.inputStyle}></TextInput>

            </View>
            <View
              style={styles.materialHelperTextBox2}
            >
                    <TextInput placeholder="Enter Name" style={styles.inputStyle}></TextInput>

            </View>
            <View
              style={styles.materialHelperTextBox3}
            >
                    <TextInput placeholder="Enter Name" style={styles.inputStyle}></TextInput>

            </View>
            <View
              style={styles.materialHelperTextBox4}
            >
                    <TextInput placeholder="Enter Name" style={styles.inputStyle}></TextInput>

            </View>
            <View
              style={styles.materialButtonDanger13}
            >
                    <TextInput placeholder="Enter Name" style={styles.inputStyle}></TextInput>
            </View>

          </FlatList>
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

export default SignUp;
