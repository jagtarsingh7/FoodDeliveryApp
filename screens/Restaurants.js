import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import MaterialButtonTransparentLocation007 from "../components/MaterialButtonTransparentLocation007";

function Restaurants(props) {
  return (
    <View style={styles.container}>
      <MaterialSearchBar style={styles.materialSearchBar}></MaterialSearchBar>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
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
        </ScrollView>
      </View>
      <View style={styles.materialSwitchRow}>
        <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
        <MaterialButtonTransparentLocation007
          style={styles.materialButtonTransparentHamburger7}
        ></MaterialButtonTransparentLocation007>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialSearchBar: {
    height: 53,
    marginTop: 97
  },
  materialHeader1: {
    height: 56,
    marginTop: -109
  },
  scrollArea: {
    width: 375,
    height: 521,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 101
  },
  scrollArea_contentContainerStyle: {
    height: 521,
    width: 375
  },
  materialCardWithImageAndTitle: {
    height: 116,
    width: 359,
    marginTop: 9,
    marginLeft: 8
  },
  materialCardWithImageAndTitle3: {
    height: 116,
    width: 359,
    marginTop: 12,
    marginLeft: 8
  },
  materialCardWithImageAndTitle2: {
    height: 116,
    width: 359,
    marginTop: 7,
    marginLeft: 8
  },
  materialCardWithImageAndTitle1: {
    height: 116,
    width: 359,
    marginTop: 11,
    marginLeft: 8
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginTop: 6
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    marginLeft: 13,
    marginTop: 6
  },
  materialButtonTransparentHamburger7: {
    height: 36,
    width: 36,
    marginLeft: 182
  },
  materialSwitchRow: {
    height: 36,
    flexDirection: "row",
    marginTop: -569,
    marginLeft: 27,
    marginRight: 27
  }
});

export default Restaurants;
