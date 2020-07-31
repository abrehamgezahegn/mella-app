import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./appRouter";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Main" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
