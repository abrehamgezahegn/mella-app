import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions, Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

let STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
StatusBarManager.getHeight((statusBarHeight) => {
  STATUSBAR_HEIGHT =
    Platform.OS === "ios" ? statusBarHeight.height : StatusBarManager.HEIGHT;
});

const { width, height } = Dimensions.get("window");

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
