import React, { useState } from "react";
import { value } from "react-native-extended-stylesheet";

export const AppContext = React.createContext();

const AppProvider = props => {
  const [notifications, setNotifications] = useState(3);

  return (
    <AppContext.Provider value={{ notifications }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
