import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppHeader from "./components/AppHeader";
import MainTabNav from "./navigation/MainTabNav";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppHeader />
      <MainTabNav />
    </NavigationContainer>
  );
}
