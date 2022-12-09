import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonWithShadow(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput
        placeholder="Favourite Restaurants"
        style={styles.textInput}
      ></TextInput>
      <Icon name="arrow-long-down" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
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
    paddingRight: 16
  },
  textInput: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    fontFamily: "alex-brush-regular",
    width: 130,
    height: 17
  },
  icon: {
    top: 10,
    left: 136,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 14
  }
});

export default MaterialButtonWithShadow;
