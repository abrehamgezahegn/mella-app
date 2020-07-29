import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";
import { useNavigation } from "@react-navigation/native";

const JobCard = ({ job, ...props }) => {
  const navigation = useNavigation();
  console.log("naviationnn isn jc ", navigation);
  return (
    <BounceAnimation
      onPress={() => navigation.navigate("Order", { job })}
      containerStyle={styles.container}
    >
      <Text style={styles.text}>{job.title}</Text>
    </BounceAnimation>
  );
};

export default JobCard;
