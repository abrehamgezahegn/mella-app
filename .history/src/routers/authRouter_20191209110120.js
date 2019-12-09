import { createStackNavigator } from "react-navigation-stack";
import { Text, View } from "react-native";

const SignIn = () => (
  <View>
    <Text>Sign in</Text>
  </View>
);

const SignUp = () => (
  <View>
    <Text>Sign up</Text>
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
