import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import JobCard from "../../components/JobCard";
import OrderCard from "../../components/OrderCard";
import { styles } from "./styles";
import BounceAnimation from "../../components/BounceAnimation";

const jobs = [
  {
    title: "Mechanic",
    cover: "https://live.staticflickr.com/7496/15691216399_42a007c99a_b.jpg",
  },
  {
    title: "Photographer",
    cover: "https://usembassyaddis.files.wordpress.com/2017/03/azz.jpg?w=676",
  },
  {
    title: "Dj",
    cover:
      "https://imageproxy.viewbook.com/82894/64d9fe69275b80d0b18cc10a8aff4c76_hd.jpg?w=1109&h=1109",
  },
  {
    title: "Home cleaning",
    cover:
      "https://previews.123rf.com/images/elnur/elnur1611/elnur161105588/66440302-man-cleaning-home-with-vacuum-cleaner.jpg",
  },

  {
    title: "Mechanic",
    cover: "https://live.staticflickr.com/7496/15691216399_42a007c99a_b.jpg",
  },
  {
    title: "Photographer",
    cover: "https://usembassyaddis.files.wordpress.com/2017/03/azz.jpg?w=676",
  },
  {
    title: "Dj",
    cover:
      "https://imageproxy.viewbook.com/82894/64d9fe69275b80d0b18cc10a8aff4c76_hd.jpg?w=1109&h=1109",
  },
  {
    title: "Home cleaning",
    cover:
      "https://previews.123rf.com/images/elnur/elnur1611/elnur161105588/66440302-man-cleaning-home-with-vacuum-cleaner.jpg",
  },
];

const orders = [
  {
    id: "6717g2h9182b38",
    job: "Mechanic",
    location: "Sarbet Church St.Giorgis",
    jobTags: [
      {
        title: "Signal Strength",
        id: "1234terf3r4t32",
      },
      {
        title: "Tire Change",
        id: "5678ghjkl",
      },
      {
        title: "Installation",
        id: "78iubhio8y7giuoh",
      },
    ],
  },
  {
    id: "6717g2cgjvhbukjblnh9182b38",
    job: "Mechanic",
    location: "Sarbet Church St.Giorgis",
    jobTags: [
      {
        title: "Signal Strength",
        id: "1234terf3r4t32",
      },
      {
        title: "Tire Change",
        id: "5678ghjkl",
      },
      {
        title: "Installation",
        id: "78iubhio8y7giuoh",
      },
    ],
  },
  {
    id: "6717uihobiog2h9182b38",
    job: "Mechanic",
    location: "Sarbet Church St.Giorgis",
    jobTags: [
      {
        title: "Signal Strength",
        id: "1234terf3r4t32",
      },
      {
        title: "Tire Change",
        id: "5678ghjkl",
      },
      {
        title: "Installation",
        id: "78iubhio8y7giuoh",
      },
    ],
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
                  "https://www.slantmagazine.com/wp-content/uploads/2020/08/limbo.jpg",
              }}
            />
          </BounceAnimation>
          <View style={styles.header}>
            <Text style={styles.headerText}>Mella</Text>
          </View>
        </View>

        <View style={styles.ordersSection}>
          <Text style={styles.sectionTitle}>Pending Orders</Text>
          <ScrollView style={styles.ordersContainer} horizontal>
            {orders.map((item) => (
              <View style={styles.orderCard} key={item.id}>
                <OrderCard order={item} />
              </View>
            ))}
          </ScrollView>
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
