import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$secondaryColor",
    height: height * 0.15,
    width: width * 0.4,
    marginBottom: 20,
    borderRadius: "$borderRadius",
    padding: 12
  },
  text: {
    color: "$textLight",
    fontSize: 16,
    fontWeight: "bold"
  }
});
