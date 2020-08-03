import React, { useState } from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Tag from "../Tag";
import TextArea from "../TextArea";
import { styles } from "./styles";
import ButtonOutlined from "../ButtonOutlined";

const Confirmation = ({ job, selectedTags, note, setNote, location }) => {
  const [showTextArea, toggleTextArea] = useState(false);

  return (
    <View style={styles.confirmationContainer}>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.bigText}>{job.title}</Text>
        <View style={{ ...styles.row, marginTop: 12 }}>
          <Entypo
            name="location-pin"
            size={20}
            style={{ ...styles.icon, marginRight: 6, marginTop: -12 }}
          />
          <Text style={{ ...styles.text, textAlign: "center" }}>
            {location.name}
          </Text>
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
        {note.length == 0 && !showTextArea && (
          <ButtonOutlined
            onPress={() => {
              toggleTextArea(true);
            }}
          >
            <Text style={{ color: "#ABB4BD", fontSize: 16 }}>
              {" "}
              + Leave Note{" "}
            </Text>
          </ButtonOutlined>
        )}
        {showTextArea && <TextArea onChange={setNote} value={note} />}
        {note.length > 0 && !showTextArea && (
          <>
            <Text style={{ ...styles.text, marginTop: 0 }}>Your Note</Text>
            <Text style={{ ...styles.textLight, marginTop: 12 }}>{note}</Text>
          </>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};
("");

export default Confirmation;
