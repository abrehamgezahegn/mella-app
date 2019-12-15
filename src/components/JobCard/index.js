import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { styles } from "./styles";

const JobCard = ({ job }) => {
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
      tension: 160,
      restDisplacementThreshold: 0.5
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
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.text}>{job.title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
