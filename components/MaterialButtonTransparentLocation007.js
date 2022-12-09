import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonTransparentLocation007(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="map-marker-outline" style={styles.caption}></Icon>
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
    color: "rgba(155,155,155,1)",
    fontSize: 24
  }
});

export default MaterialButtonTransparentLocation007;
