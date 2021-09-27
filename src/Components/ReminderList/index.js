import React from "react";
import { deleteReminder, setUpdateFlag } from "../../Redux/Actions";
import { connect } from "react-redux";

const ReminderList = ({ reminder, index, deleteReminder, setUpdateFlag }) => {
  const deleteReminderRow = (index) => {
    deleteReminder(index);
  };

  const setFieldFlag = (index) => {
    setUpdateFlag(index);
  };
  return (
    <div className="reminder-div">
      <h3>{reminder.task}</h3>
      <div className="dateTime">
        <p>{reminder.date}</p>
        <p>{reminder.time}</p>
      </div>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => {
          deleteReminderRow(index);
        }}
      ></button>
      <button
        type="button"
        className="button"
        onClick={() => setFieldFlag(index)}
      >
        Update Reminder
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, { deleteReminder, setUpdateFlag })(
  ReminderList
);
