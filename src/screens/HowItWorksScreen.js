import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HowItWorksScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>How It Works</Text>
    <Button
      title="Meet the Competition"
      onPress={() => navigation.navigate("Meet the Competition")}
    />
  </View>
);

const styles = StyleSheet.create({});

export default HowItWorksScreen;
