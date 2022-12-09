import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialButtonTransparentHamburger3 from "../components/MaterialButtonTransparentHamburger3";
import MaterialButtonTransparentHamburger4 from "../components/MaterialButtonTransparentHamburger4";
import MaterialCard12 from "../components/MaterialCard12";

function TrackOrder(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      
      <View style={styles.materialButtonTransparentHamburger3Row}>
        <MaterialButtonTransparentHamburger3
          style={styles.materialButtonTransparentHamburger3}
        ></MaterialButtonTransparentHamburger3>
        <MaterialButtonTransparentHamburger4
          style={styles.materialButtonTransparentHamburger4}
        ></MaterialButtonTransparentHamburger4>
      </View>
      <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
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
  
  materialButtonTransparentHamburger3: {
    height: 51,
    width: 59
  },
  materialButtonTransparentHamburger4: {
    height: 53,
    width: 55,
    marginLeft: 22
  },
  materialButtonTransparentHamburger3Row: {
    height: 53,
    flexDirection: "row",
    marginTop: 291,
    marginLeft: 107,
    marginRight: 132
  },
  materialCard12: {
    height: 253,
    width: 359,
    marginTop: -335,
    marginLeft: 8
  }
});

export default TrackOrder;
