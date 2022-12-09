import React, { Component } from "react";
import { StyleSheet, View, Slider } from "react-native";

function MaterialSlider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Slider value={21} disabled={false} style={styles.slider}></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "dotted"
  },
  slider: {
    height: 30,
    width: 150
  }
});

export default MaterialSlider;
