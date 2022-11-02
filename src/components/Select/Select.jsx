import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { clsx } from "clsx";
import "./select.css";

const Select = (props) => {
  const { options, value: valueProp, onChange, className } = props;

  const [value, setValue] = useState(valueProp);
  const styles = clsx("select", className);

  function handleOnChange(event) {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value);
  }
  return (
    <select value={value} onChange={handleOnChange} className={styles}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.content}
        </option>
      ))}
    </select>
  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
