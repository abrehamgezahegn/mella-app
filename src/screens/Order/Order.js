import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Tags, Confirmation, Map } from "../../components/OrderForms";
import BounceAnimation from "../../components/BounceAnimation";
import LoadingModal from "../../components/LoadingModal";
import CompletedLottie from "../../components/CompletedLottie";
import GoogleAutocomplete from "../../components/GoogleAutocomplete";
import ButtonBlurred from "../../components/ButtonBlurred";

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

const { width } = Dimensions.get("window");

export const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  const subString = str.substr(0, length);
  return subString.substr(0, subString.lastIndexOf(" ")) + "…";
};

const Order = (props) => {
  const renderTags = () => {
    return (
      <Tags
        jobTags={props.jobTags}
        handleTagTap={props.handleTagTap}
        selectedTags={props.selectedTags}
        setNote={props.setNote}
        note={props.note}
      />
    );
  };

  const renderConfirmation = () => {
    return (
      <Confirmation
        job={props.job}
        selectedTags={props.selectedTags}
        note={props.note}
        setNote={props.setNote}
        location={props.location}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={title[props.step]} onBack={props.onPrev} />
      <View style={styles.inner}>
        {props.step === 1 && (
          <Map
            setLocation={props.setLocation}
            location={props.location}
            setLocationName={props.setLocationName}
            setAutocompleteValue={props.setAutocompleteValue}
            initialLocation={props.initialLocation}
          />
        )}
        {props.step === 2 && renderTags()}
        {props.step === 3 && renderConfirmation()}
      </View>
      {props.step === 1 && (
        <>
          <View
            style={{
              position: "absolute",
              top: 100,
              width,
              alignItems: "center",
            }}
          >
            <View style={{ width: 340 }}>
              <GoogleAutocomplete
                setLocation={props.setLocation}
                setLocationName={props.setLocationName}
                autocompleteValue={props.autocompleteValue}
                setAutocompleteValue={props.setAutocompleteValue}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <ButtonBlurred containerStyle={{ paddingVertical: 18 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#2A2C36" }}
              >
                {props.locationName
                  ? truncate(props.locationName, 36)
                  : "Searching for location..."}
              </Text>
            </ButtonBlurred>
          </View>
        </>
      )}
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
