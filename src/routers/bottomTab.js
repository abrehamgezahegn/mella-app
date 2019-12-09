import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import TabIcon from "../components/TabIcon";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName = "home";
  if (routeName === "Notification") {
    iconName = "ios-notifications";
  } else if (routeName === "Pros") {
    iconName = "account-search";
  }
  return (
    <TabIcon name={iconName} size={28} color={tintColor} tab={routeName} />
  );
};

export default createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Pros: { screen: HomeScreen },
    Notification: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    shifting: true,
    activeColor: "#EF3651",
    inactiveColor: "#ABB4BD",
    barStyle: {
      backgroundColor: "#2A2C36",
      height: 58
    },
    tabBarOptions: {
      activeTintColor: "#EF3651",
      inactiveTintColor: "#ABB4BD",
      style: {
        backgroundColor: "#2A2C36"
      }
    }
  }
);
