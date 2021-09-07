import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStackNav from "./HomeStackNav";
import NavigationScreen from "../screens/NavigationScreen";
import StateManagementScreen from "../screens/StateManagementScreen";
import HelpScreen from "../screens/HelpScreen";
import DebuggingScreen from "../screens/DebuggingScreen";
import PublishingScreen from "../screens/PublishingScreen";

const Tab = createBottomTabNavigator();

const MainTabNav = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === "Getting Started") {
          iconName = focused ? "home-circle" : "home-circle-outline";
        } else if (route.name === "Navigation") {
          iconName = focused ? "directions" : "directions";
        } else if (route.name === "State Management") {
          iconName = focused ? "database" : "database";
        } else if (route.name === "Help") {
          iconName = focused ? "help-rhombus" : "help-rhombus-outline";
        } else if (route.name === "Debugging") {
          iconName = focused ? "bug" : "bug-outline";
        } else if (route.name === "Publishing") {
          iconName = focused ? "send-circle" : "send-circle-outline";
        }

        return (
          <MaterialCommunityIcons name={iconName} size={30} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: "#c01f29",
      inactiveTintColor: "#383838",
      showLabel: false,
      style: {
        shadowOpacity: 0.29,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        elevation: 10,
      },
    }}
  >
    <Tab.Screen name="Getting Started" component={HomeStackNav} />
    <Tab.Screen name="Navigation" component={NavigationScreen} />
    <Tab.Screen name="State Management" component={StateManagementScreen} />
    <Tab.Screen name="Debugging" component={DebuggingScreen} />
    <Tab.Screen name="Publishing" component={PublishingScreen} />
    <Tab.Screen name="Help" component={HelpScreen} />
  </Tab.Navigator>
);

export default MainTabNav;
