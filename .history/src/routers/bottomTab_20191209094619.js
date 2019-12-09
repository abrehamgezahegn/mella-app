import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import { createAppContainer } from "react-navigation";

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color="#bada55" />,
      tabBarBadge: true,
      tabBarColor: "#bada55",
      navigationOptions: {
        headerMode: "none"
      }
    },
    Notifications: {
      screen: Home,
      tabBarIcon: <AntDesign size={24} name="home" color="#bada55" />,
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

export default createAppContainer(tabNavigator);
