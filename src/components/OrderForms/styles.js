import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    flex: 0.7,
    justifyContent: "center",
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: width / 4,
    justifyContent: "center",
  },

  confirmationContainer: {
    marginTop: 20,
    alignItems: "center",
    flex: 0.9,
    justifyContent: "center",
  },
  mapContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  pinStyle: {
    width: 100,
    height: 50,
    position: "absolute",
    top: height / 2.2,
    left: width / 2,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "$textGrey",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 24, // TODO: ere keep your styles uniform baba
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
    width: "100%",
  },
  closeButton: {
    color: "$danger",
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
