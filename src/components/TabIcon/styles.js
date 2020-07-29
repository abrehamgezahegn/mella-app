import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  icon: { position: "relative" },
  badge: {
    position: "absolute",
    right: -3,
    top: -3,
    backgroundColor: "$secondaryColor",
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "$backgroundDark",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center"
  }
});
