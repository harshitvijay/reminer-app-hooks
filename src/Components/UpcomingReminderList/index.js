import React from "react";
import { deleteReminder } from "../../Redux/Actions";
import { connect } from "react-redux";

const UpcomingReminderList = ({ reminder, index }) => {
  const deleteReminderRow = (index) => {
    deleteReminder(index);
  };
  return (
    <div className="bg-secondary bg-gradient text-light rounded p-1 m-1 position-relative">
      <h3 className="text-center">{reminder.task}</h3>
      <div className="d-flex justify-content-evenly text-center">
        <p>{reminder.date}</p>
        <p>{reminder.time}</p>
      </div>
      <button
        type="button"
        className="btn-close position-absolute top-0 right-0 btn-danger"
        aria-label="Close"
        onClick={() => {
          deleteReminderRow(index);
        }}
      ></button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, { deleteReminder })(
  UpcomingReminderList
);
