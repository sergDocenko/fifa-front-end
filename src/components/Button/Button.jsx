import clsx from "clsx";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, disabled, className, onClick }) => {
  const style = clsx("button", className);
  return (
    <button disabled={disabled} className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
