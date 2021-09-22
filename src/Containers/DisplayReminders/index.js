import React from "react";
import { connect } from "react-redux";
import { deleteReminder } from "../../Redux/Actions";

const DisplayReminders = ({ reminders, deleteReminder }) => {
  const deleteReminderRow = (index) => {
    deleteReminder(index);
  };
  return (
    <>
      <div className="col-sm-6 child">
        {reminders.Reminders.map((reminder, index) => {
          return (
            <div
              key={index}
              className="bg-secondary bg-gradient text-light rounded p-1 m-1 position-relative"
            >
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
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, { deleteReminder })(DisplayReminders);
