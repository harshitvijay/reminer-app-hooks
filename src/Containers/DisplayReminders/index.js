import React from "react";
import { connect } from "react-redux";
import ReminderList from "../../Components/ReminderList";
import { deleteReminder, clearReminder } from "../../Redux/Actions";
import { isPastTime } from "../../utils";

const DisplayReminders = ({ reminders, clearReminder }) => {
  const clear = () => {
    clearReminder();
  };

  return (
    <>
      <div className="reminders">
        <div className="reminder-col">
          <h2 className="remin-heading">Past Reminders</h2>
          {reminders.Reminders.map((reminder, index) => {
            return isPastTime(reminder.date, reminder.time) ? (
              <ReminderList key={index} index={index} reminder={reminder} />
            ) : null;
          })}
        </div>
        <div className="reminder-col">
          <h2 className="remin-heading">Upcoming Reminders</h2>
          {reminders.Reminders.map((reminder, index) => {
            return !isPastTime(reminder.date, reminder.time) ? (
              <ReminderList key={index} index={index} reminder={reminder} />
            ) : null;
          })}
        </div>
      </div>
      {reminders.Reminders.length ? (
        <button type="button" className="button clear" onClick={clear}>
          Clear Reminders
        </button>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, { deleteReminder, clearReminder })(
  DisplayReminders
);
