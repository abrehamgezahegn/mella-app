import React from "react";
import FinalRouter from "./routers";
import AuthProvider from "./contexts/AuthProvider";
import AppProvider from "./contexts/AppProvider";

const FinalApp = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <FinalRouter />
      </AppProvider>
    </AuthProvider>
  );
};

export default FinalApp;
