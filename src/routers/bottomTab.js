import React, { useContext } from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import TabIcon from "../components/TabIcon";
import { Button } from "react-native-paper";
import { AppContext } from "../contexts/AppProvider";
import Home from "../screens/Home";

const HomeScreen = () => {
  const context = useContext(AppContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button onPress={context.incNotification}> some</Button>
    </View>
  );
};

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
    Home: { screen: Home },
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
      backgroundColor: "#1E1F28",
      height: 58
    }
  }
);
