import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppContext } from "../../contexts/AppProvider";

const TabIcon = ({ name, color, size, tab }) => {
  const context = useContext(AppContext);
  const badgeCount = 8;
  return (
    <View
      style={{
        width: 28,
        height: 24,
        alignItems: "center",
        marginBottom: 4
      }}
    >
      {tab === "Home" && (
        <Entypo
          style={{ position: "relative", marginBottom: 4 }}
          name={name}
          size={size}
          color={color}
        />
      )}
      {tab === "Pros" && (
        <MaterialCommunityIcons
          style={{ position: "relative", marginBottom: 4 }}
          name={name}
          size={size}
          color={color}
        />
      )}
      {tab === "Notification" && (
        <Ionicons
          style={{ position: "relative", marginBottom: 4 }}
          name={name}
          size={size}
          color={color}
        />
      )}
      {badgeCount > 0 && tab === "Notification" && (
        <View
          style={{
            position: "absolute",
            right: -3,
            top: -3,
            backgroundColor: "#EF3651",
            borderRadius: 9,
            borderWidth: 2,
            borderColor: "#2A2C36",
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TabIcon;
