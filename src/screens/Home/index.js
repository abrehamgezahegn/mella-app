import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import JobCard from "../../components/JobCard";
import { styles } from "./styles";
import BounceAnimation from "../../components/BounceAnimation";

const jobs = [
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
  {
    title: "Mechanic",
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BounceAnimation
            onPress={() => {
              navigation.openDrawer();
            }}
            containerStyle={{ zIndex: 10 }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginTop: 20,
              }}
              source={{
                uri:
                  "https://www.gannett-cdn.com/presto/2019/09/11/USAT/ab5c4363-b8ec-40b4-a617-4e0b08a3aa4b-AP_Kevin_Hart_Crash.JPG",
              }}
            />
          </BounceAnimation>
          <View style={styles.header}>
            <Text style={styles.headerText}>Jobs</Text>
          </View>
        </View>
        <View style={styles.inner}>
          {jobs.map((item) => (
            <JobCard key={Math.random()} job={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
