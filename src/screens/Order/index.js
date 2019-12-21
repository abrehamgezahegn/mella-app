import React from "react";
import Order from "./Order";

const OrderContainer = props => {
  console.log(props.navigation.state.params);
  return <Order />;
};

export default OrderContainer;
