import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import BounceAnimation from "../BounceAnimation";

const styles = EStyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "$textGrey",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 24, // TODO: ere keep your styles uniform baba
  },
});

const ButtonOutlined = ({ onPress, children }) => {
  return (
    <BounceAnimation onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </BounceAnimation>
  );
};

export default ButtonOutlined;
