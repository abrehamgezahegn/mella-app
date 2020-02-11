import React from "react";
import {
  Modal as ModalRN,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert
} from "react-native";
import { BlurView } from "expo-blur";
import Loading from "../Loading";

const LoadingModal = props => {
  return (
    <ModalRN animationType="none" transparent={true} visible={props.visible}>
      <BlurView
        tint="dark"
        intensity={70}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Loading onCancel={props.cancelRequest} />
      </BlurView>
    </ModalRN>
  );
};

export default LoadingModal;
