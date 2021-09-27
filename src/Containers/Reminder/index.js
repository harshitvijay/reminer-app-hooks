import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { inputData } from "../../constants";
import { connect } from "react-redux";
import {
  addReminder,
  updateReminder,
  setUpdateFlag,
} from "../../Redux/Actions";

const Reminder = ({
  addReminder,
  updateReminder,
  reminders,
  setUpdateFlag,
}) => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [reminder, setReminders] = useState([]);
  const { flag, index } = reminders.FieldFlag;

  useEffect(() => {
    if (flag) {
      document.getElementById("btn").textContent = "Edit";
      setFields(reminders.Reminders[index]);
      setUpdateFlag(index);
    }
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    const errorObj = {};
    let formIsValid = true;

    if (!fields.task) {
      formIsValid = false;
      errorObj.task = "Cannot be empty";
    }
    if (!fields.date) {
      formIsValid = false;
      errorObj.daye = "Cannot be Empty!";
    }
    if (!fields.time) {
      formIsValid = false;
      errorObj.time = "Cannot be Empty!";
    }
    setErrors(errorObj);
    return formIsValid;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setReminders([...reminder, fields]);
      if (document.getElementById("btn").textContent === "Edit") {
        updateReminder(index, fields);
        document.getElementById("btn").textContent = "Submit";
      } else {
        addReminder(fields);
      }
      setFields({
        task: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div className="col-sm-6 child">
      <form>
        {inputData.map((data, index) => (
          <Input
            key={index}
            data={data}
            value={fields[data.name]}
            error={errors[data.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          id="btn"
          className="btn btn-primary"
          onClick={formSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reminders: state,
});

export default connect(mapStateToProps, {
  addReminder,
  updateReminder,
  setUpdateFlag,
})(Reminder);
