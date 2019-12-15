import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar, Platform } from "react-native";

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundLight",
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      },
      ios: {
        paddingTop: 20
      }
    }),
    paddingHorizontal: "6%"
  },
  inner: {
    flex: 1,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingBottom: 40
  },
  header: {
    fontSize: 34,
    color: "$textLight",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30
  }
});
