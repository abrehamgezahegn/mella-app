import React from "react";
import { View, Text } from "react-native";
import Tag from "../Tag";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

const Confirmation = ({ job, selectedTags, note, location }) => {
  return (
    <View style={styles.confirmationContainer}>
      <Text style={styles.bigText}>{job.title}</Text>
      <View style={{ ...styles.row, marginTop: 12 }}>
        <Entypo
          name="location-pin"
          size={20}
          style={{ ...styles.icon, marginRight: 6 }}
        />
        <Text style={styles.text}>{location.name}</Text>
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
      {note.length == 0 && (
        <Text style={{ ...styles.text, marginTop: 0 }}>No note</Text>
      )}
      {note.length > 0 && (
        <>
          <Text style={{ ...styles.text, marginTop: 0 }}>Your Note</Text>
          <Text style={{ ...styles.textLight, marginTop: 12 }}>{note}</Text>
        </>
      )}
    </View>
  );
};
("");

export default Confirmation;
