import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundLight",
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 10,
      },
    }),
    paddingHorizontal: "6%",
  },
  inner: {
    flex: 1,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingBottom: 40,
  },
  header: {
    width: width,
    position: "absolute",
    borderBottomWidth: 0.5,
    borderColor: "$textGrey",
    left: -24,
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 24,
    color: "$textLight",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 35,
  },
});
