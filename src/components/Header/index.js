import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <BounceAnimation
        onPress={() => {
          props.onBack();
        }}
        containerStyle={{
          position: "absolute",
          left: 0,
          padding: 12,
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="md-arrow-round-back" size={24} color="#F7F7F7" />
      </BounceAnimation>
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Header;
