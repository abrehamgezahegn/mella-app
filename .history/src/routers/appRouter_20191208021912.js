import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTab from "./bottomTab";

const AppNavigator = createStackNavigator({
  BottomTab: {
    screen: BottomTab
  }
});

export default createAppContainer(AppNavigator);
