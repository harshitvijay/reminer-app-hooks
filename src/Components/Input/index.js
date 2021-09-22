import React from "react";

const Input = ({ data, value, error, onChange }) => {
  return (
    <div className="mb-5">
      <label className="form-label">
        {data.label} <span className="text-danger">*</span>
      </label>
      <input
        type={data.type}
        className="form-control"
        name={data.name}
        value={value}
        onChange={onChange}
      />
      <span className="text-danger">{error}</span>
    </div>
  );
};

export default Input;
