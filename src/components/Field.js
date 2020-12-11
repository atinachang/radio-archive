import React from "react";

const Field = ({ name, label, value, type,placeholder, onChange }) => (
  <div className="field">
  <label htmlFor={`field-`}>{label}</label>
  <input
  id={`field-`}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  />
  </div>
);

export default Field;
