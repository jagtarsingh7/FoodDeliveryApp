import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import MaterialButtonDanger10 from "../components/MaterialButtonDanger10";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

function Cart(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCardWithoutImage
            style={styles.materialCardWithoutImage}
          ></MaterialCardWithoutImage>
        </ScrollView>
      </View>
      <View style={styles.materialButtonDanger10Row}>
        <MaterialButtonDanger10
          style={styles.materialButtonDanger10}
        ></MaterialButtonDanger10>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
      </View>
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
    width: 375,
    height: 499,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 499,
    width: 375
  },
  materialCardWithoutImage: {
    height: 483,
    width: 359,
    marginTop: 5,
    marginLeft: 8
  },
  materialButtonDanger10: {
    height: 36,
    width: 100
  },
  materialButtonSuccess: {
    height: 36,
    width: 100,
    marginLeft: 60
  },
  materialButtonDanger10Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 64,
    marginRight: 51
  }
});

export default Cart;
