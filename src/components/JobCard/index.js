import React from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";

const JobCard = ({ job, ...props }) => {
  return (
    <BounceAnimation
      onPress={() => props.navigation.navigate("Order", { job })}
      containerStyle={styles.container}
    >
      <Text style={styles.text}>{job.title}</Text>
    </BounceAnimation>
  );
};

export default withNavigation(JobCard);
