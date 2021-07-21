import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DefinitionScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>React Native Defined</Text>
    <Button
      title="How it Works"
      onPress={() => navigation.navigate("How It Works")}
    />
  </View>
);

const styles = StyleSheet.create({});

export default DefinitionScreen;
