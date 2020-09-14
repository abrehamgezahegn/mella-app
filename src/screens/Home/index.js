import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import JobCard from "../../components/JobCard";
import OrderCard from "../../components/OrderCard";
import { styles } from "./styles";
import BounceAnimation from "../../components/BounceAnimation";
import axios from "axios";
import { useAuth } from "../../contexts/AuthProvider";

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

const Home = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const ordersRef = useRef();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (ordersRef) {
      if (ordersRef.current) console.log("scroll view", ordersRef.current);
    }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`/order/user/${auth.user.id}`);
      setOrders(res.data);
    } catch (error) {
      console.log("fetch order", error);
    }
  };

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
          <ScrollView ref={ordersRef} style={styles.ordersContainer} horizontal>
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
