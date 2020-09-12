import React, { useState, useEffect } from "react";
import { Toast } from "native-base";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthProvider";

import Order from "./Order";
import useModal from "../../hooks/useModal";

const CancelToken = axios.CancelToken;
let source;

const jobTags = [
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
  {
    title: "Gas",
    id: "678ftgyhu876t",
  },

  {
    title: "Varzish",
    id: "1234te235463gr4t32",
  },
  {
    title: "Drive",
    id: "567856fghj87hghjkl",
  },
  {
    title: "Birthday",
    id: "78i564o8y67ghj7giuoh",
  },
  {
    title: "Stove Fix",
    id: "678ftgyhugfghj876t",
  },

  {
    title: "Fridge",
    id: "12fghj34te235463gr4t32",
  },
  {
    title: "Desktop fix",
    id: "56567gy6785687hghjkl",
  },
  {
    title: "Garden",
    id: "78ifghjkubhio8y67ghj7giuoh",
  },
];

const OrderContainer = (props) => {
  const auth = useAuth();

  const [step, setStep] = useState(1);
  const [job, setJob] = useState(undefined);
  const [selectedTags, setTags] = useState([]);
  const [note, setNote] = useState("");

  const [locationName, setLocationName] = useState(null);
  const [location, setLocation] = useState({
    latitude: 8.9806,
    longitude: 38.7578,
    latitudeDelta: 0.02212519303089522,
    longitudeDelta: 0.012593641877174377,
  });
  const [autocompleteValue, setAutocompleteValue] = useState("");

  const { open, close, visible } = useModal();
  const [loading, setLoading] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const route = useRoute();

  useEffect(() => {
    setJob(route.params.job);
  }, []);

  useEffect(() => {
    if (orderSent) {
      setTimeout(() => {
        props.navigation.navigate("Home");
      }, 2900);
    }
  }, [orderSent]);

  const handleTagTap = (tag) => {
    const isSelected = selectedTags.some((item) => item.id === tag.id);
    if (isSelected) {
      const filtered = selectedTags.filter((item) => item.id !== tag.id);
      setTags(filtered);
      return;
    }

    const data = [...selectedTags, tag];
    setTags(data);
  };

  const onNext = () => {
    if (step === 3) return submitOrder();
    if (selectedTags.length === 0 && step === 2) {
      return Toast.show({
        text: "Choose at least one tag.",
        buttonText: "Okay",
      });
    }
    if (step < 3) return setStep((prev) => ++prev);
  };

  const onPrev = () => {
    if (step === 1) props.navigation.goBack();
    if (step > 1) return setStep((prev) => --prev);
  };

  const submitOrder = async () => {
    source = CancelToken.source();

    open();
    const order = {
      client: auth.user.id,
      job: job.title,
      jobTags: selectedTags.map((item) => item.title),
      latitude: location.latitude,
      longitude: location.longitude,
      scheduled: false,
      note,
      locationName: locationName,
    };

    try {
      const res = await axios({
        url: "/order/create",
        method: "post",
        data: order,
        cancelToken: source.token,
      });
      if (res) {
        setOrderSent(true);
        close();
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("request canceled");
      }
      console.log("submit order", err);
    }
  };

  const cancelRequest = () => {
    //TODO: cancel request backend call
    console.log("canceling request ");
    source.cancel("Order canceled");
    close();
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
      cancelRequest={cancelRequest}
      loading={loading}
      orderSent={orderSent}
      submitOrder={submitOrder}
      setLocation={setLocation}
      location={location}
      locationName={locationName}
      setLocationName={setLocationName}
      autocompleteValue={autocompleteValue}
      setAutocompleteValue={setAutocompleteValue}
      setNote={setNote}
      initialLocation={auth.currentLocation}
    />
  );
};

export default OrderContainer;
