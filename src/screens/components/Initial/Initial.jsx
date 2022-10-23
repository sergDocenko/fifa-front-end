import React from "react";
import Stepper from "../../../components/Stepper/Stepper";
import { AddPlayers, Screen2, Screen3, Screen4 } from "../../components";

const steps = [
  {
    title: "Add players",
    content: <AddPlayers />,
    validate: function () {
      return true;
    },
    description: "(At this step you can add players)",
  },
  {
    title: "Step2",
    content: <Screen2 />,
    validate: function () {
      return true;
    },
  },
  {
    title: "Step3",
    content: <Screen3 />,
    validate: function () {
      return true;
    },
  },
  {
    title: "Step4",
    content: <Screen4 />,
    validate: function () {
      return true;
    },
  },
];

function Initial() {
  return (
    <div className="App">
      <Stepper steps={steps} />
    </div>
  );
}

export default Initial;
