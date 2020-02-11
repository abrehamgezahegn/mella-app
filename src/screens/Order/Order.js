import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Tags, Confirmation } from "../../components/OrderForms";
import BounceAnimation from "../../components/BounceAnimation";
import LoadingModal from "../../components/LoadingModal";

const title = {
  1: "What",
  2: "Confirmation"
};

const buttonText = {
  1: "Continue",
  2: "Confirm"
};

const Order = props => {
  const renderTags = () => {
    return (
      <Tags
        jobTags={props.jobTags}
        handleTagTap={props.handleTagTap}
        selectedTags={props.selectedTags}
      />
    );
  };

  const renderConfirmation = () => {
    return (
      <Confirmation
        job={props.job}
        selectedTags={props.selectedTags}
        note={props.note}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={title[props.step]} onBack={props.onPrev} />
      <View style={styles.inner}>
        {props.step === 1 && renderTags()}
        {props.step === 2 && renderConfirmation()}
      </View>

      <BounceAnimation onPress={props.onNext}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> {buttonText[props.step]} </Text>
        </View>
      </BounceAnimation>
      <LoadingModal
        open={props.openModal}
        close={props.closeModal}
        visible={props.isModalVisible}
      />
    </View>
  );
};

export default Order;
