import React, { useContext } from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import TabIcon from "../components/TabIcon";
import { Button } from "react-native-paper";
import { AppContext } from "../contexts/AppProvider";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";

const ProsScreen = () => {
  const context = useContext(AppContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pros</Text>
      <Button onPress={context.incNotification}>impress</Button>
    </View>
  );
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { name } = navigation;
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

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#EF3651"
      inactiveColor="#ABB4BD"
      barStyle={{
        backgroundColor: "#1E1F28",
        height: 58,
      }}
      tabBarIcon={getTabBarIcon}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="home" size={28} color={color} tab="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Pros"
        component={ProsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="account-search" size={28} color={color} tab="Pros" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarBadge: true,
          tabBarIcon: ({ color, size }) => (
            <TabIcon
              name="ios-notifications"
              size={28}
              color={color}
              tab="Notification"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
