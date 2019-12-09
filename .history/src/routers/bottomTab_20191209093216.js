import React from "react";
import { createBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color="#fff" />,
      tabBarBadge: true,
      tabBarColor: "#bada55"
    },
    Notifications: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color="#fff" />,
      tabBarBadge: true,
      tabBarColor: "#bada55"
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#bada55"
    }
  }
);
