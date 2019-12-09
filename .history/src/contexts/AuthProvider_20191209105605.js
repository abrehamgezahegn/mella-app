import React, { useState } from "react";
import { value } from "react-native-extended-stylesheet";

const AuthProvider = props => {
  const AuthContext = React.createContext();

  return (
    <AuthContext.Provider value={{ user, loggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
