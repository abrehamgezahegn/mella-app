import React, { useState } from "react";
import { value } from "react-native-extended-stylesheet";

export const AuthContext = React.createContext();

const AuthProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, loggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
