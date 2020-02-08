import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "yellow",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: width / 4
  },
  button: {
    borderWidth: 2,
    borderColor: "$textGrey",
    paddingVertical: 12,
    borderRadius: 24 // TODO: ere keep your styles uniform baba
  },
  text: {
    color: "$textGrey",
    fontSize: 16
  },
  textInput: {
    padding: 16,
    paddingVertical: 24,
    height: 80,
    backgroundColor: "$backgroundDark",
    fontSize: 18,
    color: "$white",
    borderWidth: 1,
    borderColor: "$textGrey",
    borderRadius: "$borderRadius",
    width: "100%"
  }
});
