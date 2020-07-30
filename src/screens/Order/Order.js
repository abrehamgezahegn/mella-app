import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Tags, Confirmation, Map } from "../../components/OrderForms";
import BounceAnimation from "../../components/BounceAnimation";
import LoadingModal from "../../components/LoadingModal";
import CompletedLottie from "../../components/CompletedLottie";

const title = {
  1: "Order",
  2: "Order",
  3: "Confirmation",
};

const buttonText = {
  1: "Continue",
  2: "Continue",
  3: "Confirm",
};

const Order = (props) => {
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
        {props.step === 1 && <Map />}
        {props.step === 2 && renderTags()}
        {props.step === 3 && renderConfirmation()}
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
        cancelRequest={props.cancelRequest}
      />
      {props.orderSent && <CompletedLottie />}
    </View>
  );
};

export default Order;
