import React, { useState } from "react";
import Order from "./Order";

const OrderContainer = props => {
  const [step, setStep] = useState(2);

  console.log(props.navigation.state.params);
  return <Order step={step} />;
};

export default OrderContainer;
