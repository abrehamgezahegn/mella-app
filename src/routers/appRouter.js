import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTab from "./bottomTab";
import Order from "../screens/Order";

const AppNavigator = createStackNavigator(
  {
    Bottom: {
      screen: BottomTab
    },
    Order: {
      screen: Order
    }
  },
  {
    initialRouteName: "Bottom",

    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: "red",
    //     borderWidth: 0
    //   }
    // },
    headerMode: "none"
  }
);

export default AppNavigator;
