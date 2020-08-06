import React, { useState, useContext } from "react";

import useCurrentLocation from "../hooks/useCurrentLocation";
import useNotification from "../hooks/useNotification";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    id: "5f27e7cafa81e778961dabc7",
    firstName: "Kevin",
    lastName: "Hart",
  });

  const [locLoading, currentLocation] = useCurrentLocation();
  useNotification();

  return (
    <AuthContext.Provider
      value={{ user, loggedIn, currentLocation, locLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
