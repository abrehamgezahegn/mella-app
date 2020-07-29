import React, { useEffect, useRef, useState } from "react";
import { View, Modal, Text } from "react-native";
import LottieView from "lottie-react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { BlurView } from "expo-blur";

const CompletedLottie = props => {
  const [lottieRef, setLottie] = useState(null);

  useEffect(() => {
    lottieRef && lottieRef.play();
  }, [lottieRef]);

  return (
    <Modal animationType="none" transparent={true} visible={true}>
      <BlurView
        tint="dark"
        intensity={70}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <View style={styles.animationContainer}>
          <LottieView
            ref={lottie => setLottie(lottie)}
            loop={false}
            duration={3000}
            style={{
              width: 200,
              height: 200
            }}
            source={require("../../../assets/loading-complete.json")}
          />
          <Text style={styles.text}>Your Request has been sent!</Text>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text: {
    fontSize: 24,
    color: "$textLight",
    fontWeight: "bold"
  }
});

export default CompletedLottie;
