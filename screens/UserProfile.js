import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import MaterialButtonDanger14 from "../components/MaterialButtonDanger14";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";

function UserProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialHeader1Stack}>
        <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Icon name="user-circle" style={styles.icon}></Icon>
            <MaterialHelperTextBox1
              style={styles.materialHelperTextBox1}
            ></MaterialHelperTextBox1>
            <MaterialHelperTextBox1
              style={styles.materialHelperTextBox2}
            ></MaterialHelperTextBox1>
            <MaterialHelperTextBox1
              style={styles.materialHelperTextBox3}
            ></MaterialHelperTextBox1>
            <MaterialHelperTextBox1
              style={styles.materialHelperTextBox4}
            ></MaterialHelperTextBox1>
            <MaterialButtonDanger14
              style={styles.materialButtonDanger14}
            ></MaterialButtonDanger14>
          </ScrollView>
        </View>
      </View>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
      <View style={styles.rect}></View>
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader1: {
    height: 56,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0
  },
  scrollArea: {
    left: 0,
    width: 375,
    height: 622,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    top: 55
  },
  scrollArea_contentContainerStyle: {
    height: 622,
    width: 375
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 52,
    height: 52,
    width: 52,
    marginTop: 30,
    marginLeft: 162
  },
  materialHelperTextBox1: {
    height: 90,
    width: 295,
    marginTop: 23,
    marginLeft: 36
  },
  materialHelperTextBox2: {
    height: 90,
    width: 295,
    marginTop: 6,
    marginLeft: 36
  },
  materialHelperTextBox3: {
    height: 90,
    width: 295,
    marginLeft: 36
  },
  materialHelperTextBox4: {
    height: 90,
    width: 295,
    marginTop: 15,
    marginLeft: 36
  },
  materialButtonDanger14: {
    height: 36,
    width: 100,
    marginTop: 74,
    marginLeft: 136
  },
  materialHeader1Stack: {
    top: 41,
    left: 0,
    height: 677,
    position: "absolute",
    right: 0
  },
  materialIconButtonsFooter: {
    height: 46,
    width: 375,
    position: "absolute",
    left: 0,
    top: 718
  },
  rect: {},
  loremIpsum: {
    top: -15,
    left: 56,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default UserProfile;
