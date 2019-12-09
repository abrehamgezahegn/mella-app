import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const FinalRouter = () => {
  const { loggedIn } = useContext(AuthContext);

  return <div></div>;
};

export default FinalRouter;
