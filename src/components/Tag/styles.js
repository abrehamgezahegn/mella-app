import styled from "styled-components";
import { View, Text } from "react-native";

export const StyledView = styled.View`
  background-color: #ef3651;
  padding: ${(props) => (props.selected ? "8px" : "7px")};
  border-radius: 14px;
  display: flex;
  align-self: flex-start;
  margin: 8px;
  opacity: ${(props) => (props.selected ? 1 : 0.6)};
`;

export const StyledText = styled.Text`
  color: #f7f7f7;
  font-size: 12px;
  font-weight: 600;
`;
