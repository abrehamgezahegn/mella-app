import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Tags } from "../../components/OrderForms";
import BounceAnimation from "../../components/BounceAnimation";

const title = {
  2: "What"
};

const jobTags = [
  {
    title: "Signal Strength",
    id: "1234terf3r4t32"
  },
  {
    title: "Tire Change",
    id: "5678ghjkl"
  },
  {
    title: "Installation",
    id: "78iubhio8y7giuoh"
  },
  {
    title: "Gas",
    id: "678ftgyhu876t"
  },

  {
    title: "Varzish",
    id: "1234te235463gr4t32"
  },
  {
    title: "Drive",
    id: "567856fghj87hghjkl"
  },
  {
    title: "Birthday",
    id: "78i564o8y67ghj7giuoh"
  },
  {
    title: "Stove Fix",
    id: "678ftgyhugfghj876t"
  },

  {
    title: "Fridge",
    id: "12fghj34te235463gr4t32"
  },
  {
    title: "Desktop fix",
    id: "56567gy6785687hghjkl"
  },
  {
    title: "Garden",
    id: "78ifghjkubhio8y67ghj7giuoh"
  }
];

const Order = props => {
  const [selectedTags, setTags] = useState([]);

  const handleTagTap = tag => {
    const isSelected = selectedTags.some(item => item.id === tag.id);
    if (isSelected) {
      const filtered = selectedTags.filter(item => item.id !== tag.id);
      setTags(filtered);
      return;
    }

    const data = [...selectedTags, tag];
    setTags(data);
  };

  const renderTags = () => {
    return (
      <Tags
        jobTags={jobTags}
        handleTagTap={handleTagTap}
        selectedTags={selectedTags}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={title[props.step]} />
      <View style={styles.inner}>{props.step === 2 && renderTags()}</View>
      <BounceAnimation>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Continue </Text>
        </View>
      </BounceAnimation>
    </View>
  );
};

export default Order;
