import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { inputData } from "../../constants";
import { connect } from "react-redux";
import { handleValidation } from "./validation";
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

  const formSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(fields, setErrors)) {
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
    <div className="child">
      <h2 id="form-heading">Add Reminders</h2>
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
        <button type="submit" id="btn" className="button" onClick={formSubmit}>
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
