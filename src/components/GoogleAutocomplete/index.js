import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GoogleAutocomplete = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        style={{ backgroundColor: "red", borderWidth: 0 }}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        onFail={(error) => {
          console.log("autocomeplte", error);
        }}
        query={{
          key: "AIzaSyDTo6A8qKIomdgyJGZng4UtV6W2L1LIvBs",
          language: "en",
        }}
      />
    </View>
  );
};

export default GoogleAutocomplete;
