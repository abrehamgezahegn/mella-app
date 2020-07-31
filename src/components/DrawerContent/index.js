import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import DrawerItem from "../DrawerItem";
import { AntDesign } from "@expo/vector-icons";

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://www.gannett-cdn.com/presto/2019/09/11/USAT/ab5c4363-b8ec-40b4-a617-4e0b08a3aa4b-AP_Kevin_Hart_Crash.JPG",
          }}
        />
        <Text style={styles.name}>Kevin Hart</Text>
        <Text style={styles.phone}>09881414241</Text>
      </View>
      <DrawerItem
        icon={<AntDesign name="setting" size={24} style={styles.icon} />}
        text="Profile"
      />
    </View>
  );
};

export default DrawerContent;
