import React, { useEffect, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

const BounceAnimation = ({
  containerStyle = {},
  onPress = () => {},
  children,
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
      toValue: 0.9,
      tension: 90,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
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
