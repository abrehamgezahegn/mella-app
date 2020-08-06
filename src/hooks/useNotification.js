import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import { Toast } from "native-base";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const useNotification = () => {
  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      Toast.show({
        text: "Go to settings and allow notification please.",
        buttonText: "Okay",
      });
      return;
    }
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    // TODO: send token to backend

    await SplashScreen.hideAsync();
  };

  const handleNotification = (some, thing) => {
    console.log("got notification", some, thing);
  };

  useEffect(() => {
    (async () => {
      await registerForPushNotificationsAsync();
    })();
    const notificationSubscription = Notifications.addPushTokenListener(
      handleNotification
    );

    return () => {
      Notifications.removePushTokenSubscription(notificationSubscription);
    };
  }, []);

  return undefined;
};

export default useNotification;
