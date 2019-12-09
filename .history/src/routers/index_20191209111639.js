import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { createSwitchNavigator } from "react-navigation";
import AppNavigator from "./appRouter";
import AuthNavigator from "./authRouter";

const FinalRouter = () => {
  const { loggedIn } = useContext(AuthContext);

  const FinalRouter = createSwitchNavigator({
    AppNavigator: {
      screen: AppNavigator
    },
    AuthNavigator: {
      screen: AuthNavigator
    }
  });

  return <div></div>;
};

export default FinalRouter;
