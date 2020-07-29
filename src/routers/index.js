import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import AppNavigator from "./appRouter";
// import AuthNavigator from "./authRouter";

import { NavigationContainer } from "@react-navigation/native";

const FinalRouter = () => {
  const { loggedIn } = useContext(AuthContext);
  let initialRouteName = "AuthNavigator";
  if (loggedIn) initialRouteName = "AppNavigator";

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );

  // const SwitchNav = createSwitchNavigator(
  //   {
  //     AppNavigator: AppNavigator,

  //     AuthNavigator: AuthNavigator,
  //   },
  //   {
  //     initialRouteName,
  //   }
  // );

  // const FinalNav = createAppContainer(SwitchNav);

  // return <FinalNav />;
};

export default FinalRouter;
