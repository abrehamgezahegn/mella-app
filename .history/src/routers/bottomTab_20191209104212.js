import React from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
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
    const { name, badgeCount, color, size, tab } = this.props;
    return (
      <View
        style={{
          width: 28,
          height: 24,
          alignItems: "center",
          marginBottom: 4
        }}
      >
        {tab === "Home" && (
          <Entypo
            style={{ position: "relative", marginBottom: 4 }}
            name={name}
            size={size}
            color={color}
          />
        )}
        {tab === "Pros" && (
          <MaterialCommunityIcons
            style={{ position: "relative", marginBottom: 4 }}
            name={name}
            size={size}
            color={color}
          />
        )}
        {tab === "Notification" && (
          <Ionicons
            style={{ position: "relative", marginBottom: 4 }}
            name={name}
            size={size}
            color={color}
          />
        )}
        {badgeCount > 0 && tab === "Notification" && (
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
  let iconName = "home";
  if (routeName === "Notification") {
    iconName = "ios-notifications";
  } else if (routeName === "Pros") {
    iconName = "account-search";
  }

  // You can return any component that you like here!
  return (
    <HomeIconWithBadge
      name={iconName}
      size={28}
      color={tintColor}
      tab={routeName}
    />
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
