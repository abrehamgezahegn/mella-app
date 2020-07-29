import React from "react";
import { View, ScrollView, Text } from "react-native";
import JobCard from "../../components/JobCard";
import { styles } from "./styles";

const jobs = [
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  },
  {
    title: "Mechanic"
  }
];

const Home = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Jobs</Text>
    <View style={styles.inner}>
      {jobs.map(item => (
        <JobCard key={Math.random()} job={item} />
      ))}
    </View>
  </ScrollView>
);

export default Home;
