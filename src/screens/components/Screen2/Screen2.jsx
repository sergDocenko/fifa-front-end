import { useState, useEffect } from "react";
import InputText from "../../../components/InputText/InputText";

const Screen2 = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setInterval(() => {
      setValue("Hi");
    }, 4000);
  }, []);

  return (
    <div>
      <InputText defaultValue={value} />
      <p>Step2</p>
    </div>
  );
};

export default Screen2;
