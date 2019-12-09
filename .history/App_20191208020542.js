import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FinalApp from "./src";

export default function App() {
  return <FinalApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
