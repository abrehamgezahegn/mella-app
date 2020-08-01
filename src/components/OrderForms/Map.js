import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import LottieView from "lottie-react-native";
import debounce from "lodash.debounce";
import { View, Dimensions, Text } from "react-native";
import GoogleAutocomplete from "../GoogleAutocomplete";
import * as Location from "expo-location";
import { styles } from "./styles";
import ButtonBlurred from "../ButtonBlurred";

const { width, height } = Dimensions.get("window");

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const Map = ({ setLocation }) => {
  const [lottieRef, setLottie] = useState(null);
  const [loadingLocation, setLoading] = useState(true);
  const [locationName, setLocationName] = useState("Searching for location...");

  useEffect(() => {
    lottieRef && lottieRef.play();
  }, [lottieRef]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("location permission denied");
        //: TODO: navigate to home and show toast
      }
      let location = await Location.getCurrentPositionAsync({});
      // setLocation({
      //   lat: location.coords.latitude,
      //   lng: location.coords.longitude,
      //   name: "",
      // });
    })();
  }, []);

  const handleRegionChange = debounce(async (region) => {
    setLocationName("Searching for location...");
    setLoading(true);
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDTo6A8qKIomdgyJGZng4UtV6W2L1LIvBs`
      );

      console.log("raw", res.data);
      console.log("formatted ", res.data.results[0].formatted_address);
      const name = res.data.results[0].formatted_address;
      setLocationName(name);
      setLocation({
        lat: region.latitude,
        lng: region.longitude,
        name: name,
      });
      setLoading(false);
    } catch (error) {
      console.log("handle region chage", error);
    }
  }, 500);

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 8.9806,
            longitude: 38.7578,
            latitudeDelta: 0.02212519303089522,
            longitudeDelta: 0.012593641877174377,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapPadding={{ top: 0, right: 20, bottom: 140, left: 0 }}
          loadingEnabled={true}
          onRegionChange={(region) => {
            handleRegionChange(region);
          }}
        >
          <LottieView
            ref={(lottie) => setLottie(lottie)}
            loop
            duration={3000}
            style={{
              width: 100,
              height: 120,
              position: "absolute",
              top: height / 6.8,
              left: width / 5.7,
            }}
            source={require("../../../assets/map-pin.json")}
          />
          {/* <View
            style={{
              zIndex: 1001,
              position: "absolute",
              top: 108,
              width,
              alignItems: "center",
            }}
          >
            <View style={{ width: 340 }}>
              <GoogleAutocomplete />
            </View>
          </View> */}

          <View
            style={{
              zIndex: 1000,
              position: "absolute",
              bottom: 100,
              width,
              alignItems: "center",
            }}
          >
            <ButtonBlurred loading={loadingLocation}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#2A2C36" }}
              >
                {locationName}
              </Text>
            </ButtonBlurred>
          </View>
        </MapView>
      </View>
    </>
  );
};

export default Map;
