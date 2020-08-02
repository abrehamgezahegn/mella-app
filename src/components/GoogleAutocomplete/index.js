import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { value } from "react-native-extended-stylesheet";

const styles = {
  textInputContainer: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    opacity: 0.8,
  },
  container: {
    backgroundColor: "#fff",
  },
  listView: {
    backgroundColor: "#fff",
  },
};

const GoogleAutocomplete = ({
  setLocation,
  setLocationName,
  autocompleteValue,
  setAutocompleteValue,
}) => {
  return (
    <View>
      <GooglePlacesAutocomplete
        styles={styles}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          let name = data.structured_formatting.main_text;
          let location = {
            name,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          };
          setLocation(location);
          setLocationName(name);
          setAutocompleteValue(name);
        }}
        textInputProps={{
          value: autocompleteValue,
          onChangeText: (value) => {
            console.log("on chnage", value);
            setAutocompleteValue(value);
          },
        }}
        onFail={(error) => {
          console.log("autocomeplte", error);
        }}
        onTimeout={() => {
          console.log("autocomplete request timeout");
        }}
        currentLocation={true}
        query={{
          key: "AIzaSyDTo6A8qKIomdgyJGZng4UtV6W2L1LIvBs",
          language: "en",
        }}
        fetchDetails={true}
      />
    </View>
  );
};

export default GoogleAutocomplete;
