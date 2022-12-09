import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonTransparentHamburger2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="message-text" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  caption: {
    color: "#3F51B5",
    fontSize: 24
  }
});

export default MaterialButtonTransparentHamburger2;
