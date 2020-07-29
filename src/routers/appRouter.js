import React from "react";
import BottomTab from "./bottomTab";
import Order from "../screens/Order";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="BottomTab">
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
