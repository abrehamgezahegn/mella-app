import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import LottieView from "lottie-react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Loading = props => {
  const [lottieRef, setLottie] = useState(null);

  useEffect(() => {
    lottieRef && lottieRef.play();
  }, [lottieRef]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Alert.alert(
          "Stop Waiting?",
          "Your request will be canceled!",
          [
            {
              text: "Cancel Request",
              onPress: () => props.onCancel()
            },
            {
              text: "Keep Waiting",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
      }}
    >
      <View style={styles.animationContainer}>
        <LottieView
          ref={lottie => setLottie(lottie)}
          style={{
            width: 150,
            height: 150
          }}
          source={require("../../../assets/loading.json")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = EStyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default Loading;
