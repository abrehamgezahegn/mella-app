import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import Home from "../screens/Home";
export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      tabBarIcon: <Entypo name="tabBarIcon" tintColo />,
      tabBarBadge: true
    },
    Notifications: {
      screen: Home,
      tabBarIcon: <Entypo name="tabBarIcon" tintColo />,
      tabBarBadge: true
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);
