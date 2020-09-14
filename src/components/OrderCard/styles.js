import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    shadowColor: "#1E1F28",
    shadowOffset: {
      width: 5,
      height: 12,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  inner: {
    minWidth: 240,
    maxWidth: 340,
    height: "100%",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "$backgroundDark",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "$textGrey",
    fontSize: 16,
  },
  bigText: {
    color: "$textLight",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },

  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
  },

  icon: {
    color: "$textGrey",
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textLight: {
    color: "$textLight",
    fontWeight: "bold",
  },
  avatarContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
