import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

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

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View
        style={{
          width: 28,
          height: 24,
          alignItems: "center"
        }}
      >
        <Ionicons
          style={{ position: "relative", marginBottom: 4 }}
          name={name}
          size={size}
          color={color}
        />
        {badgeCount > 0 && (
          <View
            style={{
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "#EF3651",
              borderRadius: 8,
              borderWidth: 2,
              borderColor: "#2A2C36",
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName = "home";
  if (routeName === "Home") {
    iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === "Settings") {
    iconName = `ios-options${focused ? "" : "-outline"}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={28} color={tintColor} />;
};

export default createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Nate: { screen: HomeScreen }
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
