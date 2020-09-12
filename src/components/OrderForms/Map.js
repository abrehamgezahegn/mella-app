import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import LottieView from "lottie-react-native";
import debounce from "lodash.debounce";
import { View, Dimensions } from "react-native";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

const Map = ({
  setLocation,
  setLocationName,
  setAutocompleteValue,
  initialLocation,
}) => {
  const [lottieRef, setLottie] = useState(null);

  useEffect(() => {
    lottieRef && lottieRef.play();
  }, [lottieRef]);

  const handleRegionChange = debounce(async (region) => {
    setLocationName(null);
    setAutocompleteValue("");

    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDTo6A8qKIomdgyJGZng4UtV6W2L1LIvBs`
      );
      const name = res.data.results[0].formatted_address;
      setLocationName(name);
      setLocation({
        ...region,
        latitude: region.latitude,
        longitude: region.longitude,

        name: name,
      });
      setAutocompleteValue(name);
    } catch (error) {
      console.log("handle region chage", error);
    }
  }, 1000);

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={initialLocation}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapPadding={{ top: 0, right: 20, bottom: 170, left: 0 }}
          loadingEnabled={true}
          onRegionChangeComplete={(region) => {
            setLocation(region);
            handleRegionChange(region);
          }}
          cacheEnabled={true}
          followsUserLocation={true}
          userLocationAnnotationTitle={"Your location"}
        />
        <LottieView
          ref={(lottie) => setLottie(lottie)}
          loop
          duration={3000}
          style={{
            width: 100,
            height: 120,
            position: "absolute",
            top: height / 18,
            left: width / 10,
          }}
          source={require("../../../assets/map-pin.json")}
        />
      </View>
    </>
  );
};

export default Map;
