import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import Tag from "../Tag";
import { truncate } from "../../utils/helpers";

const pros = [
  {
    avatar:
      "https://dancingastronaut.com/wp-content/uploads/2020/07/Burna-Boy-Parallax-e1593785681933.jpg",
    id: "yvhihg897",
  },
  {
    avatar:
      "https://images.sk-static.com/images/media/profile_images/artists/567275/huge_avatar",
    id: "yvhihvigubnopjg897",
  },
  {
    avatar:
      "https://i1.wp.com/pagesix.com/wp-content/uploads/sites/3/2020/02/pete-davidson-2.jpg?quality=80&strip=all&ssl=1",
    id: "yvvbkjhihg897",
  },
];

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
            {truncate(order.locationName, 30)}
          </Text>
        </View>
        {/* <View style={{ ...styles.tagsContainer, marginBottom: 22 }}>
          {order.jobTags.map((item) => (
            <Tag
              key={item}
              text={item}
              onPress={() => {}}
              tag={item}
              selected={true}
            />
          ))}
        </View> */}
        <View style={styles.avatarContainer}>
          {pros.map((item) => (
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginHorizontal: 12,
              }}
              source={{
                uri: item.avatar,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
