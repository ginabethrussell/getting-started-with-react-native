import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Constants from "expo-constants";

import awesomelogo from "../../assets/ainc-logo.png";

const AppHeader = () => (
  <View style={styles.headerContainer}>
    <Image
      source={awesomelogo}
      style={{
        height: 40,
        width: 150,
        resizeMode: "contain",
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#383838",
    shadowColor: "#000000",
    shadowOpacity: 0.29,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 10,
  },
});
export default AppHeader;
