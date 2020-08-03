import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions, Platform, StatusBar } from "react-native";

let STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const { width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundLight",
    height: 68,
    flexDirection: "row",
    width,
    paddingVertical: 8,
    paddingHorizontal: 18,
    paddingTop: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomWidth: 0.5,
    borderColor: "$textGrey",
    zIndex: 100,
    top: -STATUSBAR_HEIGHT,
  },
  text: {
    color: "$textLight",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
