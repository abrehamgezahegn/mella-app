import React from "react";
// import DatePickerRN from "react-native-datepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = () => {
  return (
    <DateTimePickerModal
      isVisible={true}
      mode="date"
      onConfirm={() => {}}
      onCancel={() => {}}
    />
  );
};

export default DatePicker;
