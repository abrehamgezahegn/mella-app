import React, { useState, useEffect } from "react";
import Order from "./Order";
import useModal from "../../hooks/useModal";

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

const OrderContainer = props => {
  const [step, setStep] = useState(1);
  const [job, setJob] = useState(undefined);
  const [selectedTags, setTags] = useState([]);
  const [note, setNote] = useState("Get your ass over here ASAP!");

  const { open, close, visible } = useModal();

  useEffect(() => {
    const params = props.navigation.state.params;
    // console.log("params", params.job);
    setJob(params.job);
  }, [props.navigation.state.params]);

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

  const onNext = () => {
    if (step === 2) return open();
    if (step < 2) return setStep(prev => ++prev);
  };

  const onPrev = () => {
    console.log("on prevvvv");
    if (step === 1) props.navigation.goBack();
    if (step > 1) setStep(prev => --prev);
  };

  return (
    <Order
      step={step}
      setStep={setStep}
      selectedTags={selectedTags}
      jobTags={jobTags}
      handleTagTap={handleTagTap}
      job={job}
      note={note}
      onNext={onNext}
      onPrev={onPrev}
      openModal={open}
      closeModal={close}
      isModalVisible={visible}
    />
  );
};

export default OrderContainer;
