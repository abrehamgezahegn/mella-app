import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTab from "./bottomTab";
import Home from "../screens/Home";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    BottomTab: {
      screen: BottomTab
    }
  },
  {
    initialRouteName: "BottomTab"
  }
);

export default createAppContainer(AppNavigator);
