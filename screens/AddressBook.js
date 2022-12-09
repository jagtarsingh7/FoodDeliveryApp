import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";

function AddressBook(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialHeader1Stack}>
        <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
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
    position: "absolute",
    left: 0,
    top: 0,
    right: 0
  },
  scrollArea: {
    left: 0,
    width: 375,
    height: 620,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    top: 55
  },
  scrollArea_contentContainerStyle: {
    height: 620,
    width: 375
  },
  materialHeader1Stack: {
    height: 675,
    marginTop: 41
  },
  materialIconButtonsFooter: {
    height: 46,
    width: 375,
    marginTop: 2
  }
});

export default AddressBook;
