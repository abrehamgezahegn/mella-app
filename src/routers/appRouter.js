import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTab from "./bottomTab";
import Home from "../screens/Home";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Bottom: {
      screen: BottomTab
    }
  },
  {
    initialRouteName: "Bottom",
    headerMode: "none"
  }
);

export default AppNavigator;
