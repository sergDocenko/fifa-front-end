import PropTypes from "prop-types";
import React from "react";

export const StepperContext = React.createContext();

export function StepperProvider(props) {
  const { activeStepData, updateTempStepData, children } = props;
  return (
    <StepperContext.Provider value={{ activeStepData, updateTempStepData }}>
      {children}
    </StepperContext.Provider>
  );
}

StepperProvider.propTypes = {
  activeStepData: PropTypes.any,
  updateTempStepData: PropTypes.func,
};
