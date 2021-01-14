import { useState } from "react";

const useCalculateHook = () => {
  const [result, setResult] = useState();
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setsecondNumber] = useState();

  return { result };
};
