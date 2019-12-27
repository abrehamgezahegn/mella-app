import React, { useEffect, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

const BounceAnimation = ({
  containerStyle = {},
  onPress = () => {},
  children
}) => {
  const [animatedValue, setValue] = useState();
  const [animatedStyle, setStyle] = useState({});

  React.useEffect(() => {
    const animatedValue = new Animated.Value(1);
    setValue(animatedValue);
    setStyle({ transform: [{ scale: animatedValue }] });
  }, []);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.7,
      tension: 90
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[containerStyle, animatedStyle]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default BounceAnimation;
