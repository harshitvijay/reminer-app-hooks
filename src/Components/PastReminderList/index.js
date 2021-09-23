import React from "react";
import ReminderList from "../ReminderList";

const PastReminderList = ({ reminder, index }) => {
  return <ReminderList reminder={reminder} index={index} />;
};

export default PastReminderList;
