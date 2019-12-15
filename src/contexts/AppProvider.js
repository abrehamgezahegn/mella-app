import React, { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

export const AppContext = React.createContext();

EStyleSheet.build({
  $backgroundDark: "#1E1F28",
  $backgroundLight: "#2A2C36",
  $secondaryColor: "#EF3651",
  $white: "#F7F7F7",
  $textGrey: "#ABB4BD",
  $textLight: "#F7F7F7",
  $success: "#55D85A",
  $danger: "#FF3E3E",
  $borderRadius: 8
});

const AppProvider = props => {
  const [notifications, setNotifications] = useState(3);

  const incNotification = () => setNotifications(prev => ++prev);

  return (
    <AppContext.Provider value={{ notifications, incNotification }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
