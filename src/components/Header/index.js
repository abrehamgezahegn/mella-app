import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";
import { withNavigation } from "react-navigation";

const Header = props => {
  return (
    <View style={styles.container}>
      <BounceAnimation
        onPress={() => {
          props.navigation.goBack();
        }}
        containerStyle={{
          position: "absolute",
          left: 18
        }}
      >
        <Ionicons name="md-arrow-round-back" size={24} color="#F7F7F7" />
      </BounceAnimation>
      <View>
        <Text style={styles.text}>Where?</Text>
      </View>
    </View>
  );
};

export default withNavigation(Header);