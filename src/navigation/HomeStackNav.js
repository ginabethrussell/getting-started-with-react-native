import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/home-stack/WelcomeScreen";
import DefinitionScreen from "../screens/home-stack/DefinitionScreen";
import HowItWorksScreen from "../screens/home-stack/HowItWorksScreen";
import ComparisonScreen from "../screens/home-stack/ComparisonScreen";
import GettingStartedScreen from "../screens/home-stack/GettingStartedScreen";

const Stack = createStackNavigator();

const HomeStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="What is React Native" component={DefinitionScreen} />
    <Stack.Screen name="How It Works" component={HowItWorksScreen} />
    <Stack.Screen
      name="Challenges and Competition"
      component={ComparisonScreen}
    />
    <Stack.Screen name="Getting Started" component={GettingStartedScreen} />
  </Stack.Navigator>
);

export default HomeStackNav;
