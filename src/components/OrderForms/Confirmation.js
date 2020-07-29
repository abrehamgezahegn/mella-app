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
      <View style={{ ...styles.tagsContainer, marginBottom: 40 }}>
        {selectedTags.map(item => (
          <Tag
            key={item.id}
            text={item.title}
            onPress={() => {}}
            tag={item}
            selected={true}
          />
        ))}
      </View>
      <Text style={styles.bigText}>{job.title}</Text>
      <View style={{ ...styles.row, marginTop: 12 }}>
        <Entypo
          name="location-pin"
          size={20}
          style={{ ...styles.icon, marginRight: 6 }}
        />
        <Text style={styles.text}>{"4 Kilo Medahnialem"}</Text>
      </View>
      <Text style={{ ...styles.text, marginTop: 40 }}>Your Note</Text>
      <Text style={{ ...styles.textLight, marginTop: 12 }}>{note}</Text>
      <BounceAnimation
        onPress={() => {
          console.log("schedluleing");
        }}
      >
        <View style={{ ...styles.button, marginTop: 40 }}>
          <MaterialCommunityIcons
            size={20}
            name="calendar-clock"
            style={styles.icon}
          />
          <Text style={styles.text}>Schedule For Later</Text>
        </View>
      </BounceAnimation>
      {/* <View style={styles.row}>
        <Text style={styles.text}>Scheduled For: Tue 2AM, Feb 08 </Text>
        <BounceAnimation
          onPress={() => {
            console.log("schedluleing");
          }}
        >
          <Ionicons
            name="ios-close-circle"
            style={styles.closeButton}
            size={20}
          />
        </BounceAnimation>
      </View> */}
      <DatePicker />
    </View>
  );
};
("");

export default Confirmation;
