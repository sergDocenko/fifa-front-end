import PropTypes from "prop-types";
import Button from "../../../Button/Button";
import "./stepper-actions.css";

const StepperActions = (props) => {
  const { onNext, onPreviouse, isFinishStep, prevDisabled } = props;
  return (
    <div className="stepper-actions">
      <Button disabled={prevDisabled} onClick={onPreviouse}>
        prev
      </Button>
      <Button className={"stepper-actions__button"} onClick={onNext}>
        {isFinishStep ? "finish" : "next"}
      </Button>
    </div>
  );
};

StepperActions.propTypes = {
  onNext: PropTypes.func,
  onPreviouse: PropTypes.func,
  prevDisabled: PropTypes.bool,
  isFinishStep: PropTypes.bool,
};

export default StepperActions;
