import React from "react";

const Input = ({ data, value, error, onChange }) => {
  return (
    <div className="input-div">
      <label className="form-label">
        {data.label} <span className="error">*</span>
      </label>
      <input
        type={data.type}
        className="form-control"
        name={data.name}
        value={value}
        onChange={onChange}
      />
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
