import React from "react";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import { View, Text } from "react-native";

const NotificationsContainer = () => {
  return (
    <Container style={{ paddingTop: 30, backgroundColor: "#2A2C36" }}>
      {/* <Header hasTabs /> */}
      <Tabs
        renderTabBar={() => (
          <ScrollableTab
            tabsContainerStyle={{ backgroundColor: "#2A2C36" }}
            tabStyle={{ backgroundColor: "#2A2C36" }}
            backgroundColor="red"
            underlineStyle={{ backgroundColor: "#EF3651" }}
            style={{ backgroundColor: "#2A2C36" }}
          />
        )}
      >
        <Tab heading="Notifications" style={{ backgroundColor: "#2A2C36" }}>
          <View>
            <Text>one</Text>
          </View>
        </Tab>
        <Tab heading="Orders" style={{ backgroundColor: "#2A2C36" }}>
          <View>
            <Text>one</Text>
          </View>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default NotificationsContainer;
