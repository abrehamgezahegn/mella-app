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
                  "https://pmcdeadline2.files.wordpress.com/2019/08/kevinhartphotobykevinkwan-e1565889449268.jpg?w=580&h=383&crop=1",
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
