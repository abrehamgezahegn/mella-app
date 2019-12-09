import React from "react";
import FinalRouter from "./routers";
import AuthProvider from "./contexts/AuthProvider";

const FinalApp = () => {
  return (
    <AuthProvider>
      <FinalRouter />
    </AuthProvider>
  );
};

export default FinalApp;
