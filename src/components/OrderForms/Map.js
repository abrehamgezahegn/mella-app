import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import LottieView from "lottie-react-native";
import { styles } from "./styles";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

import * as Location from "expo-location";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const Map = () => {
  const [lottieRef, setLottie] = useState(null);

  const [x, setX] = useState({
    latitude: 8.9806,
    longitude: 38.7578,
  });
  const [region, setRegion] = useState({
    latitude: 8.9806,
    longitude: 38.7578,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
      setX({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion({
        ...location.coords,
        latitudeDelta: 0.02212519303089522,
        longitudeDelta: 0.012593641877174377,
      });
    })();
  }, []);

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
          region={region}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapPadding={{ top: 0, right: 20, bottom: 120, left: 0 }}
          maxZoomLevel={17}
          loadingEnabled={true}
        >
          <LottieView
            ref={(lottie) => setLottie(lottie)}
            loop
            duration={3000}
            style={{
              width: 100,
              height: 120,
              position: "absolute",
              top: height / 7.1,
              left: width / 5.8,
            }}
            source={require("../../../assets/map-pin.json")}
          />
        </MapView>
      </View>
    </>
  );
};

export default Map;
