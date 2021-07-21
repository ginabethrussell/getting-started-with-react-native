import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ComparisonScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Comparison</Text>
    <Button
      title="Let's Build an App"
      onPress={() => navigation.navigate("Getting Started")}
    />
  </View>
);

const styles = StyleSheet.create({});

export default ComparisonScreen;
