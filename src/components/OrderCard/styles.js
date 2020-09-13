import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {},
  inner: {
    borderRadius: 24,
    padding: 10,
    paddingTop: 30,
    backgroundColor: "$backgroundDark",
    shadowColor: "#1E1F28",
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
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
});
