import { useState } from "react";

export const useCalc = () => {
  const [currentValue, setCurrent] = useState<string>("");
  const [prevValue, setPrev] = useState<string>("");
  const [savedValue, setSavedValue] = useState("0");
  const [operator, setOperator] = useState<string>("");

  const dotRegexp = /\.+/;
  const numberRegexp = /[1-9]/;
  const clickHandler = (type: string, value?: string) => {
    if (type === "number" && value) {
      if (currentValue.length <= 9) {
        if (value === ".") {
          if (currentValue.length <= 8) {
            if (!dotRegexp.test(currentValue) && currentValue === "") {
              setCurrent(`0${value}`);
            } else if (dotRegexp.test(currentValue)) {
            }
            if (!dotRegexp.test(currentValue) && currentValue !== "")
              setCurrent(`${currentValue}${value}`);
          }
        }

        if (numberRegexp.test(value)) setCurrent(`${currentValue}${value}`);
        if (value === "0" && currentValue !== "")
          setCurrent(`${currentValue}${value}`);
      }
    }
    if (type === "operator" && value) {
      setOperator(value.toString());
      setPrev(currentValue);
      setCurrent("");
    }
    if (type === "clearAll") {
      setCurrent("");
      setPrev("");
      setOperator("");
    }
    if (type === "changeSign") setCurrent((c) => `${parseFloat(c) * -1}`);
    if (type === "percentage") setCurrent((c) => `${parseFloat(c) * 0.01}`);
    if (type === "m+")
      setSavedValue(
        (saved) => `${parseFloat(saved) + parseFloat(currentValue)}`
      );
    if (type === "m-")
      setSavedValue(
        (saved) => `${parseFloat(saved) - parseFloat(currentValue)}`
      );
    if (type === "mr") setCurrent(savedValue);
    if (type === "mc") setSavedValue("0");
    if (type === "equal") {
      const current = parseFloat(currentValue);
      const prev = parseFloat(prevValue);
      if (operator === "+") {
        setCurrent(`${prev}-${current}`);
        setOperator("");
        setPrev("");
      }
      if (operator === "+") {
        setCurrent(`${prev + current}`);
        setOperator("");
        setPrev("");
      }
      if (operator === "-") {
        setCurrent(`${prev - current}`);
        setOperator("");
        setPrev("");
      }
      if (operator === "*") {
        setCurrent(`${prev * current}`);
        setOperator("");
        setPrev("");
      }
      if (operator === "/") {
        setCurrent(`${prev / current}`);
        setOperator("");
        setPrev("");
      }
    }
  };

  return {
    currentValue,
    clickHandler,
  };
};
