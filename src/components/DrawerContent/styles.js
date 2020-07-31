import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundDark",
    flex: 1,
    paddingTop: 64,
    alignItems: "center",
  },

  avatarSection: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    color: "$textLight",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  phone: {
    color: "$textGrey",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "400",
  },
  icon: {
    color: "$textGrey",
  },
});
