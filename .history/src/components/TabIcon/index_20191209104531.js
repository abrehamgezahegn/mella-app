import React from "react";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

class TabIcon extends React.Component {
  render() {
    const { name, badgeCount, color, size, tab } = this.props;
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
              right: -6,
              top: -3,
              backgroundColor: "#EF3651",
              borderRadius: 8,
              borderWidth: 2,
              borderColor: "#2A2C36",
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default TabIcon;
