import clsx from "clsx";
import Proptypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./input-text.css";

const InputText = (props) => {
  const { value: valueProp, onChange, className, onBlur } = props;
  const [value, setValue] = useState(valueProp);
  const styles = clsx("input-text", className);

  useEffect(() => {
    if (value !== valueProp) setValue(valueProp);
  }, [valueProp]);

  function handleChange(event) {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value, event);
  }

  function handleBlur() {
    if (onBlur) onBlur(value);
  }

  return (
    <input
      className={styles}
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

InputText.defaultProps = {
  value: "",
};

InputText.propTypes = {
  value: Proptypes.string,
  onChange: Proptypes.func,
  onBlur: Proptypes.func,
  className: Proptypes.string,
};

export default React.memo(InputText);
