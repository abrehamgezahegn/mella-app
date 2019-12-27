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
    })
  }
});
