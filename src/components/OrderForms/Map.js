import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import LottieView from "lottie-react-native";
import debounce from "lodash.debounce";
import { View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

const Map = ({
  setLocation,
  location,
  setLocationName,
  setAutocompleteValue,
}) => {
  const [lottieRef, setLottie] = useState(null);
  const [deltas, setDeltas] = useState({
    latitudeDelta: 0.02212519303089522,
    longitudeDelta: 0.012593641877174377,
  });
  const [loadingLocation, setLoading] = useState(true);

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
      // let location = await Location.getCurrentPositionAsync({});
    })();
  }, []);

  const handleRegionChange = debounce(async (region) => {
    setLoading(true);
    setLocationName(null);
    setAutocompleteValue("");

    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDTo6A8qKIomdgyJGZng4UtV6W2L1LIvBs`
      );
      const name = res.data.results[0].formatted_address;
      setLocationName(name);
      console.log("setting location", region.latitude);
      setLocation({
        ...region,
        latitude: region.latitude,
        longitude: region.longitude,

        name: name,
      });
      setLoading(false);
    } catch (error) {
      console.log("handle region chage", error);
    }
  }, 1000);

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
          region={{
            ...location,
            ...deltas,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapPadding={{ top: 0, right: 20, bottom: 140, left: 0 }}
          loadingEnabled={true}
          onRegionChangeComplete={(region) => {
            console.log("region complete");
            setLocation(region);
            setDeltas({
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            });
            handleRegionChange(region);
          }}
          onRegionChange={(region) => {
            // handleRegionChange(region);
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
              top: height / 11,
              left: width / 8.5,
            }}
            source={require("../../../assets/map-pin.json")}
          />
        </MapView>
      </View>
    </>
  );
};

export default Map;
