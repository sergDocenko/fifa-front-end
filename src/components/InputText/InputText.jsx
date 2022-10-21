import clsx from "clsx";
import Proptypes from "prop-types";
import { useState } from "react";
import "./inputText.css";

const InputText = (props) => {
  const { defaultValue, getValue, className, onBlurHandle } = props;
  const [value, setValue] = useState(defaultValue);
  const style = clsx("input__text", className);

  function handleChange(event) {
    setValue(event.target.value);
    if (getValue) getValue(event.target.value);
  }

  function handleBlur() {
    if (onBlurHandle) onBlurHandle(value);
    else return null;
  }

  return (
    <input
      className={style}
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

InputText.defaultProps = {
  defaultValue: "",
};

InputText.propTypes = {
  defaultValue: Proptypes.string,
  getValue: Proptypes.func,
  className: Proptypes.string,
};

export default InputText;
