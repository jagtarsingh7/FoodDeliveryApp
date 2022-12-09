import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialHeader1 from "../components/MaterialHeader1";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle}
          ></MaterialCardWithImageAndTitle>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle3}
          ></MaterialCardWithImageAndTitle>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle2}
          ></MaterialCardWithImageAndTitle>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle1}
          ></MaterialCardWithImageAndTitle>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle4}
          ></MaterialCardWithImageAndTitle>
        </ScrollView>
      </View>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
      <MaterialHeader1 style={styles.materialHeader2}></MaterialHeader1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 375,
    height: 620,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 97
  },
  scrollArea_contentContainerStyle: {
    height: 620,
    width: 375
  },
  materialCardWithImageAndTitle: {
    height: 106,
    width: 359,
    marginTop: 11,
    marginLeft: 8
  },
  materialCardWithImageAndTitle3: {
    height: 106,
    width: 359,
    marginTop: 13,
    marginLeft: 8
  },
  materialCardWithImageAndTitle2: {
    height: 106,
    width: 359,
    marginTop: 9,
    marginLeft: 8
  },
  materialCardWithImageAndTitle1: {
    height: 106,
    width: 359,
    marginTop: 15,
    marginLeft: 8
  },
  materialCardWithImageAndTitle4: {
    height: 109,
    width: 359,
    marginTop: 18,
    marginLeft: 8
  },
  materialIconButtonsFooter: {
    height: 46,
    width: 375,
    marginTop: 1
  },
  materialHeader2: {
    height: 56,
    marginTop: -723
  }
});

export default Settings;
