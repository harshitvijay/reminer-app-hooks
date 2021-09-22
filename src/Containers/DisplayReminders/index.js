import React from "react";
import { connect } from "react-redux";
import ReminderList from "../../Components/ReminderList";
import { deleteReminder, clearReminder } from "../../Redux/Actions";
import PastReminderList from "../../Components/PastReminderList";
import UpcomingReminderList from "../../Components/UpcomingReminderList";
import { isPastTime } from "./utils";

const DisplayReminders = ({ reminders, deleteReminder, clearReminder }) => {
  const clear = () => {
    clearReminder();
  };

  return (
    <>
      <div className="col-sm-6 child">
        {reminders.Reminders.map((reminder, index) => {
          return <ReminderList key={index} index={index} reminder={reminder} />;
        })}
        <button type="button" className="btn btn-danger" onClick={clear}>
          Clear Reminders
        </button>
      </div>
      <div className="row m-4">
        {reminders.Reminders.map((reminder, index) => {
          if (isPastTime(reminder.date, reminder.time)) {
            return (
              <PastReminderList key={index} index={index} reminder={reminder} />
            );
          } else {
            return (
              <UpcomingReminderList
                key={index}
                index={index}
                reminder={reminder}
              />
            );
          }
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, { deleteReminder, clearReminder })(
  DisplayReminders
);
