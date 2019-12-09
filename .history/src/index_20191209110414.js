import React from "react";
import FinalRouter from "./routers/appRouter";
import AuthProvider from "./contexts/AuthProvider";

const FinalApp = () => {
  return (
    <AuthProvider>
      <FinalRouter />
    </AuthProvider>
  );
};

export default FinalApp;
