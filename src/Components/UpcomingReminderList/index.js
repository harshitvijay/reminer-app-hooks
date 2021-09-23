import React from "react";
import ReminderList from "../ReminderList";

const UpcomingReminderList = ({ reminder, index }) => {
  return <ReminderList reminder={reminder} index={index} />;
};

export default UpcomingReminderList;
