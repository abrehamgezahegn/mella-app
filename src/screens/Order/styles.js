import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$backgroundLight",
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 20,
      },
    }),
  },
  inner: {
    paddingHorizontal: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "$success",
    alignSelf: "flex-end",
    marginBottom: 24,
    margin: "auto",
    width: width - 40,
    marginRight: 20,
    paddingVertical: 14,
    borderRadius: "$borderRadius",
  },
  buttonText: {
    textAlign: "center",
    color: "$white",
  },
});
