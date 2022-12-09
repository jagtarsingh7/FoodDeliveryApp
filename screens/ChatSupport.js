import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialChipBasic from "../components/MaterialChipBasic";
import MaterialChipBasic1 from "../components/MaterialChipBasic1";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";

function ChatSupport(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <MaterialChipBasic
              style={styles.materialChipBasic}
            ></MaterialChipBasic>
            <MaterialChipBasic1
              style={styles.materialChipBasic1}
            ></MaterialChipBasic1>
          </ScrollView>
        </View>
        <MaterialRightIconTextbox
          style={styles.materialRightIconTextbox}
        ></MaterialRightIconTextbox>
      </View>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader1: {
    height: 56,
    marginTop: 41
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 579,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 579,
    width: 375
  },
  materialChipBasic: {
    width: 150,
    height: 32,
    marginTop: 517,
    marginLeft: 23
  },
  materialChipBasic1: {
    width: 150,
    height: 32,
    marginTop: -110,
    marginLeft: 197
  },
  materialRightIconTextbox: {
    height: 43,
    width: 375,
    position: "absolute",
    left: 0,
    top: 578
  },
  scrollAreaStack: {
    width: 375,
    height: 621
  },
  materialIconButtonsFooter: {
    height: 46,
    width: 375
  }
});

export default ChatSupport;
