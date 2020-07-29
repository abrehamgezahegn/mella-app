import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppContext } from "../../contexts/AppProvider";
import { styles } from "./styles";

const TabIcon = ({ name, color, size, tab }) => {
  const context = useContext(AppContext);
  const badgeCount = context.notifications;
  return (
    <View
      style={{
        width: 30,
        alignItems: "center",
      }}
    >
      {tab === "Home" && (
        <Entypo style={styles.icon} name={name} size={size} color={color} />
      )}
      {tab === "Pros" && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={name}
          size={size}
          color={color}
        />
      )}
      {tab === "Notification" && (
        <Ionicons style={styles.icon} name={name} size={size} color={color} />
      )}
      {/* {badgeCount > 0 && tab === "Notification" && (
        <View style={styles.badge}>
          <Text style={styles.text}>{badgeCount}</Text>
        </View>
      )} */}
    </View>
  );
};

export default TabIcon;
