import { useState } from "react";
import { useStepperContext } from "../../../../components/Stepper/hooks";

const Screen1 = () => {
  const { updateTempStepData, activeStepData } = useStepperContext();

  const [state, setState] = useState(activeStepData);

  updateTempStepData(state);

  function handleChange(event) {
    setState(event.target.value);
  }
  return (
    <div>
      <input value={state} type="text" onChange={handleChange} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat
        delectus porro cupiditate quas aut dolor
      </p>
    </div>
  );
};

export default Screen1;
