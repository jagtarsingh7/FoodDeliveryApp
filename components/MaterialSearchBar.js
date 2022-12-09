import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <TextInput
          placeholder="Search"
          clearButtonMode="never"
          textBreakStrategy="simple"
          style={styles.inputStyle}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  button: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255, 255,1)",
    alignItems: "center",
    borderRadius: 2,
    width: 368,
    height: 48,
    marginTop: 4,
    marginLeft: 7
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontFamily: "alex-brush-regular",
    fontSize: 16,
    alignSelf: "flex-start",
    width: 348,
    lineHeight: 16
  }
});

export default MaterialSearchBar;
