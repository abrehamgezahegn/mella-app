import { createStackNavigator } from "react-navigation-stack";
import { Text, View } from "react-native";

const SignIn = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Sigin</Text>
  </View>
);

const SignUp = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Sing up</Text>
  </View>
);

export default createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  { initialRouteName: "SignIn", headerMode: "none" }
);
