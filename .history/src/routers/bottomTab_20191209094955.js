import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color={tintColor} />,
      tabBarBadge: true,
      tabBarColor: "#bada55",
      navigationOptions: {
        headerMode: "none"
      }
    },
    Notifications: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color={tintColor} />,
      tabBarBadge: true,
      tabBarColor: "#bada55"
    }
  },
  {
    headerMode: "none",
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
