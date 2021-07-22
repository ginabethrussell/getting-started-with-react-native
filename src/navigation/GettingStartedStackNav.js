import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import DefinitionScreen from "../screens/DefinitionScreen";
import HowItWorksScreen from "../screens/HowItWorksScreen";
import ComparisonScreen from "../screens/ComparisonScreen";
import GettingStartedScreen from "../screens/GettingStartedScreen";

const Stack = createStackNavigator();

const GettingStartedNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="What is React Native" component={DefinitionScreen} />
    <Stack.Screen name="How It Works" component={HowItWorksScreen} />
    <Stack.Screen name="Meet the Competition" component={ComparisonScreen} />
    <Stack.Screen name="Getting Started" component={GettingStartedScreen} />
  </Stack.Navigator>
);

export default GettingStartedNav;
