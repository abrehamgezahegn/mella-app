import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import { Toast } from "native-base";

const useCurrentLocation = () => {
  const [loading, setLocLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 8.9806,
    longitude: 38.7578,
    latitudeDelta: 0.02212519303089522,
    longitudeDelta: 0.012593641877174377,
  });

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("location permission denied");
        //: TODO: navigate to home and show toast
        Toast.show({
          text: "Go to settings and allow location please",
          buttonText: "Okay",
        });
        props.navigation.navigate("Home");
      }
      let location = await Location.getCurrentPositionAsync({});
      if (location) {
        setLocLoading(false);
        setCurrentLocation({
          ...location.coords,
          latitudeDelta: 0.02212519303089522,
          longitudeDelta: 0.012593641877174377,
        });
      }

      console.log("current location ", location);
    })();
  }, []);

  return [loading, currentLocation];
};

export default useCurrentLocation;