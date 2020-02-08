import React from "react";
import BounceAnimation from "../BounceAnimation";
import { StyledView, StyledText } from "./styles";

const Tag = ({ text, selected, tag, onPress }) => {
  return (
    <BounceAnimation onPress={() => onPress(tag)}>
      <StyledView selected={selected}>
        <StyledText>{text}</StyledText>
      </StyledView>
    </BounceAnimation>
  );
};

export default Tag;
