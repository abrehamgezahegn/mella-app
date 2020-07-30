import React from "react";
import { View, Text } from "react-native";
import Tag from "../Tag";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import DatePicker from "../DatePicker";

const Confirmation = ({ job, selectedTags, note }) => {
  return (
    <View style={styles.confirmationContainer}>
      <Text style={styles.bigText}>{job.title}</Text>
      <View style={{ ...styles.row, marginTop: 12 }}>
        <Entypo
          name="location-pin"
          size={20}
          style={{ ...styles.icon, marginRight: 6 }}
        />
        <Text style={styles.text}>{"4 Kilo Medahnialem"}</Text>
      </View>
      <View style={{ ...styles.tagsContainer, marginBottom: 22 }}>
        {selectedTags.map((item) => (
          <Tag
            key={item.id}
            text={item.title}
            onPress={() => {}}
            tag={item}
            selected={true}
          />
        ))}
      </View>
      <Text style={{ ...styles.text, marginTop: 0 }}>Your Note</Text>
      <Text style={{ ...styles.textLight, marginTop: 12 }}>{note}</Text>
    </View>
  );
};
("");

export default Confirmation;
