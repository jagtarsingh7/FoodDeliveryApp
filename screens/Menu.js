import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialSwitch7 from "../components/MaterialSwitch7";
import MaterialSwitch8 from "../components/MaterialSwitch8";
import MaterialSwitch9 from "../components/MaterialSwitch9";
import MaterialSwitch10 from "../components/MaterialSwitch10";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialSwitch1 from "../components/MaterialSwitch1";

function Menu(props) {
  return (
    <View style={styles.container}>
      <MaterialSearchBar style={styles.materialSearchBar}></MaterialSearchBar>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.scrollAreaStackStack}>
        <View style={styles.scrollAreaStack}>
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
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
          <View style={styles.scrollArea2}>
            <ScrollView
              contentContainerStyle={styles.scrollArea2_contentContainerStyle}
            >
              <View style={styles.loremIpsumRow}>
                <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
                <MaterialSwitch7
                  style={styles.materialSwitch7}
                ></MaterialSwitch7>
              </View>
              <View style={styles.loremIpsum3Row}>
                <Text style={styles.loremIpsum3}>Lorem Ipsum</Text>
                <MaterialSwitch8
                  style={styles.materialSwitch8}
                ></MaterialSwitch8>
              </View>
              <View style={styles.loremIpsum5Row}>
                <Text style={styles.loremIpsum5}>Lorem Ipsum</Text>
                <MaterialSwitch9
                  style={styles.materialSwitch9}
                ></MaterialSwitch9>
              </View>
              <View style={styles.loremIpsum7Row}>
                <Text style={styles.loremIpsum7}>Lorem Ipsum</Text>
                <MaterialSwitch10
                  style={styles.materialSwitch10}
                ></MaterialSwitch10>
              </View>
            </ScrollView>
          </View>
        </View>
        <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
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
    top: 34,
    left: 0,
    width: 375,
    height: 534,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 534,
    width: 375
  },
  materialCardWithImageAndTitle: {
    height: 116,
    width: 359,
    marginTop: 14,
    marginLeft: 8
  },
  materialCardWithImageAndTitle3: {
    height: 116,
    width: 359,
    marginTop: 10,
    marginLeft: 8
  },
  materialCardWithImageAndTitle2: {
    height: 116,
    width: 359,
    marginTop: 11,
    marginLeft: 8
  },
  materialCardWithImageAndTitle1: {
    height: 116,
    width: 359,
    marginTop: 11,
    marginLeft: 8
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    position: "absolute",
    left: 317,
    top: 0
  },
  scrollArea2: {
    top: 6,
    left: 146,
    width: 177,
    height: 223,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea2_contentContainerStyle: {
    height: 223,
    width: 177,
    overflow: "visible"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 4
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    marginLeft: 12
  },
  loremIpsumRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 6,
    marginRight: 20
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 2
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    marginLeft: 12
  },
  loremIpsum3Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 6,
    marginRight: 20
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 2
  },
  materialSwitch9: {
    width: 45,
    height: 23,
    marginLeft: 12
  },
  loremIpsum5Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 6,
    marginRight: 20
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 2
  },
  materialSwitch10: {
    width: 45,
    height: 23,
    marginLeft: 12
  },
  loremIpsum7Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 6,
    marginRight: 20
  },
  scrollAreaStack: {
    top: 0,
    left: 0,
    width: 375,
    height: 568,
    position: "absolute"
  },
  materialSwitch: {
    width: 45,
    height: 23,
    position: "absolute",
    left: 27,
    top: 6
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    position: "absolute",
    left: 85,
    top: 6
  },
  scrollAreaStackStack: {
    width: 375,
    height: 568,
    marginTop: 53
  }
});

export default Menu;
