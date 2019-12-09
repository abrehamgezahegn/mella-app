import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { createSwitchNavigator } from "react-navigation";

const FinalRouter = () => {
  const { loggedIn } = useContext(AuthContext);

  return <div></div>;
};

export default FinalRouter;
