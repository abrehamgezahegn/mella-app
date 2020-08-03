import React from "react";
import { Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

const JobCard = ({ job, ...props }) => {
  const navigation = useNavigation();
  return (
    <BounceAnimation onPress={() => navigation.navigate("Order", { job })}>
      <ImageBackground
        style={styles.container}
        borderRadius={10}
        source={{
          uri: job.cover,
        }}
      >
        <BlurView
          tint="dark"
          intensity={60}
          style={{
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderRadius: 12,
            flex: 1,
          }}
        >
          <Text style={styles.text}>{job.title}</Text>
        </BlurView>
      </ImageBackground>
    </BounceAnimation>
  );
};

export default JobCard;
