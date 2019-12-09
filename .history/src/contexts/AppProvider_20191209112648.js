import React, { useState } from "react";
import { value } from "react-native-extended-stylesheet";

export const AuthContext = React.createContext();

const AppProvider = props => {
  const [notifications, setNotifications] = useState(3);

  return (
    <AuthContext.Provider value={{ notifications }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
