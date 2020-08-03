import React, { useState, useEffect } from "react";
import { Root } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

export const AppContext = React.createContext();

EStyleSheet.build({
  $backgroundDark: "#1E1F28",
  $backgroundLight: "#2A2C36",
  $secondaryColor: "#EF3651",
  $white: "#F7F7F7",
  $textGrey: "#ABB4BD",
  $textLight: "#F7F7F7",
  $success: "#38c172",
  $danger: "#FF3E3E",
  $borderRadius: 8,
});

// const instance = axios.create({
//   baseURL: "http://localhost:3000",
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

const AppProvider = (props) => {
  const [notifications, setNotifications] = useState(3);

  const incNotification = () => setNotifications((prev) => ++prev);

  return (
    <Root>
      <AppContext.Provider value={{ notifications, incNotification }}>
        {props.children}
      </AppContext.Provider>
    </Root>
  );
};

export default AppProvider;
