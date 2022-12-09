import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Icon name="account-details" style={styles.leftIcon}></Icon>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <TextInput
          numberOfLines={1}
          placeholder="FoodYippee"
          textBreakStrategy="highQuality"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(232,106,86,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 329,
    marginTop: 4
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    height: 25,
    width: 113,
    marginLeft: -244,
    alignSelf: "center"
  },
  textInput: {
    fontFamily: "alex-brush-regular",
    fontSize: 25,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    lineHeight: 18,
    transform: [
      {
        rotate: "-7.00deg"
      }
    ],
    padding: 0,
    margin: 0,
    flex: 1,
    alignSelf: "stretch",
    width: 150,
    height: 25
  }
});

export default MaterialHeader1;
