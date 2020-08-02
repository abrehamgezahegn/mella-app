import React from "react";
import BounceAnimation from "../BounceAnimation";

import { BlurView } from "expo-blur";

const ButtonBlurred = ({ loading, containerStyle, onPress, children }) => {
  return (
    <BounceAnimation onPress={onPress}>
      <BlurView
        tint="dark"
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingVertical: 8,
          paddingHorizontal: 34,
          borderRadius: 12,
          ...containerStyle,
        }}
      >
        {children}
      </BlurView>
    </BounceAnimation>
  );
};

export default ButtonBlurred;
