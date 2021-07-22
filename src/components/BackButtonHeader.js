import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButtonHeader = ({ navigation, title, backgroundColor, color }) => (
  <View
    style={{
      ...styles.headerContainer,
      backgroundColor,
    }}
  >
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={color} />
          <Text style={{ ...styles.backText, color }}>BACK</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ ...styles.headerTitle, color }}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: "100%",
    padding: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2,
    elevation: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 14,
  },
  headerTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: 8,
  },
});

export default BackButtonHeader;
