import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import Tag from "../Tag";
import TextArea from "../TextArea";
import ButtonOutlined from "../ButtonOutlined";

const Tags = (props) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <KeyboardAwareScrollView
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
        <ButtonOutlined
          onPress={() => {
            setShowInput(true);
          }}
        >
          <Text style={styles.text}> + Leave Note </Text>
        </ButtonOutlined>
      )}
      {(showInput || props.note.length > 0) && (
        <TextArea onChange={props.setNote} value={props.note} />
      )}
    </KeyboardAwareScrollView>
  );
};

export default Tags;
