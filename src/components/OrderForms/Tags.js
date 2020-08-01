import React, { useState } from "react";
import Tag from "../Tag";
import { View, Text, TextInput } from "react-native";
import { Input } from "native-base";
import { styles } from "./styles";
import BounceAnimation from "../BounceAnimation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Tags = (props) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <KeyboardAwareScrollView
      // extraHeight={300}
      extraScrollHeight={100}
      contentContainerStyle={styles.container}
    >
      <View style={styles.tagsContainer}>
        {props.jobTags.map((item) => (
          <Tag
            key={Math.random()}
            text={item.title}
            onPress={props.handleTagTap}
            tag={item}
            selected={props.selectedTags.some((tag) => tag.id === item.id)}
          />
        ))}
      </View>
      {!showInput && props.note.length === 0 && (
        <BounceAnimation
          onPress={() => {
            setShowInput(true);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.text}> + Leave Note </Text>
          </View>
        </BounceAnimation>
      )}
      {(showInput || props.note.length > 0) && (
        <TextInput
          placeholderTextColor="#ABB4BD"
          placeholder="Please make sense"
          style={styles.textInput}
          value={props.note}
          multiline
          onChangeText={(some) => {
            props.setNote(some);
          }}
          onEndEditing={(value) => {}}
        />
      )}
    </KeyboardAwareScrollView>
  );
};

export default Tags;
