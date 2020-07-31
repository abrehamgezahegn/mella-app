import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "$textGrey",
    borderTopColor: "$textGrey",
    borderBottomWidth: 0.25,
    borderTopWidth: 0.25,
    width: "100%",
  },
  text: {
    color: "$textGrey",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 4,
  },
  icon: {
    marginRight: 20,
  },
});
