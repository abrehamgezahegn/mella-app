import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundDark",
    height: 50,
    flexDirection: "row",
    width,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  text: {
    color: "$textLight",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  }
});
