import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="cards-heart"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}>
        <MaterialCommunityIconsIcon
          name="shopping"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper4}>
        <MaterialCommunityIconsIcon
          name="bike"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.01,
    shadowRadius: 1.2,
    elevation: 3,
    backgroundColor: "rgba(232,106,86,1)"
  },
  buttonWrapper1: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 26,
    opacity: 0.8
  },
  buttonWrapper2: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    fontSize: 26,
    color: "rgba(255,255,255,1)"
  },
  buttonWrapper3: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    left: 188,
    width: 94,
    top: 15,
    height: 26
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 26
  },
  buttonWrapper4: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    left: 281,
    width: 94,
    top: 15,
    height: 26
  },
  icon4: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 26
  }
});

export default MaterialIconButtonsFooter;
