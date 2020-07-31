import React from "react";
import { View, Text } from "native-base";
import BounceAnimation from "../BounceAnimation";
import { styles } from "./styles";

const DrawerItem = ({ icon, text }) => {
  return (
    <BounceAnimation containerStyle={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </BounceAnimation>
  );
};

export default DrawerItem;
