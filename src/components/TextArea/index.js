import React from "react";
import { TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  textInput: {
    padding: 16,
    paddingVertical: 24,
    height: 80,
    backgroundColor: "$backgroundDark",
    fontSize: 18,
    color: "$white",
    borderWidth: 1,
    borderColor: "$textGrey",
    borderRadius: "$borderRadius",
    width: "100%",
  },
});

const TextArea = ({ value, onChange }) => {
  return (
    <TextInput
      placeholderTextColor="#ABB4BD"
      placeholder="Please make sense"
      style={styles.textInput}
      value={value}
      multiline
      onChangeText={onChange}
    />
  );
};

export default TextArea;
