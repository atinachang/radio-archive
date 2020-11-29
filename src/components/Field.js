import React from "react";

const Field = ({ name, label, value, placeholder, onChange }) => (
  <div>
    <label htmlFor={`field-${name}`}>{label}</label>
    <input
      id={`field-${name}`}
      name={name}
      type="text"
      value={value}
			onChange={onChange}
			placeholder={placeholder}
    />
  </div>
);

export default Field;
