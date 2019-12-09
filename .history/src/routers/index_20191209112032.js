import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./appRouter";
import AuthNavigator from "./authRouter";

const FinalRouter = () => {
  const { loggedIn } = useContext(AuthContext);
  let initialRouteName = "AuthNavigator";
  if (loggedIn) initialRouteName = "AppNavigator";

  const SwitchNav = createSwitchNavigator(
    {
      AppNavigator: {
        screen: AppNavigator
      },
      AuthNavigator: {
        screen: AuthNavigator
      }
    },
    {
      initialRouteName: () => {
        if (loggedIn) return "AppNavigator";
        return "AuthNavigator";
      }
    }
  );

  const FinalNav = createAppContainer(SwitchNav);

  return FinalNav;
};

export default FinalRouter;
