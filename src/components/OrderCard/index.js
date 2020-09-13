import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import Tag from "../Tag";

const OrderCard = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.bigText}>{order.job}</Text>
        <View style={{ ...styles.row, marginTop: 12 }}>
          <Entypo
            name="location-pin"
            size={20}
            style={{ ...styles.icon, marginRight: 6, marginTop: 0 }}
          />
          <Text style={{ ...styles.text, textAlign: "center" }}>
            {order.location}
          </Text>
        </View>
        <View style={{ ...styles.tagsContainer, marginBottom: 22 }}>
          {order.jobTags.map((item) => (
            <Tag
              key={item.id}
              text={item.title}
              onPress={() => {}}
              tag={item}
              selected={true}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
