import { ButtonTypes, Values } from "./../constants/constants";
import { useState } from "react";

export const useCalc = () => {
  const dotRegexp = /\.+/;
  const numberRegexp = /[1-9]/;
  const maxLength = 9;
  const maxLengthForPoint = 8;
  const initValue = "";
  const [currentValue, setCurrent] = useState<string>(initValue);
  const [prevValue, setPrev] = useState<string>(initValue);
  const [savedValue, setSavedValue] = useState(initValue);
  const [operator, setOperator] = useState<string>(initValue);

  const setNumber = (value: string) => {
    if (currentValue.length <= maxLength) {
      if (value === Values.point) {
        if (currentValue.length <= maxLengthForPoint) {
          if (
            !dotRegexp.test(currentValue) &&
            currentValue === Values.emptyString
          ) {
            setCurrent(`${Values.point}${value}`);
          } else if (dotRegexp.test(currentValue)) {
          }
          if (
            !dotRegexp.test(currentValue) &&
            currentValue !== Values.emptyString
          )
            setCurrent(`${currentValue}${value}`);
        }
      }

      if (numberRegexp.test(value)) setCurrent(`${currentValue}${value}`);
      if (value === Values.zero && currentValue !== Values.emptyString)
        setCurrent(`${currentValue}${value}`);
    }
  };

  const calculate = () => {
    const current = parseFloat(currentValue);
    const prev = parseFloat(prevValue);
    if (operator === Values.minus) {
      setCurrent(`${prev - current}`);
      setOperator(Values.emptyString);
      setPrev(Values.emptyString);
    }
    if (operator === Values.plus) {
      setCurrent(`${prev + current}`);
      setOperator(Values.emptyString);
      setPrev(Values.emptyString);
    }
    if (operator === Values.mult) {
      setCurrent(`${prev * current}`);
      setOperator(Values.emptyString);
      setPrev(Values.emptyString);
    }
    if (operator === Values.division) {
      setCurrent(`${prev / current}`);
      setOperator(Values.emptyString);
      setPrev(Values.emptyString);
    }
  };

  const clickHandler = (type: string, value?: string) => {
    if (type === ButtonTypes.number && value) {
      setNumber(value);
    }
    if (type === ButtonTypes.operator && value) {
      setOperator(value);
      setPrev(currentValue);
      setCurrent(Values.emptyString);
    }
    if (type === ButtonTypes.clearAll) {
      setCurrent(Values.emptyString);
      setPrev(Values.emptyString);
      setOperator(Values.emptyString);
    }
    if (type === ButtonTypes.changeSign)
      setCurrent((c) => `${parseFloat(c) * -1}`);
    if (type === ButtonTypes.percentage)
      setCurrent((c) => `${parseFloat(c) * 0.01}`);
    if (type === ButtonTypes.memoryAdd)
      setSavedValue(
        (saved) => `${parseFloat(saved) + parseFloat(currentValue)}`
      );
    if (type === ButtonTypes.memorySubstract)
      setSavedValue(
        (saved) => `${parseFloat(saved) - parseFloat(currentValue)}`
      );
    if (type === ButtonTypes.memoryRead) setCurrent(savedValue);
    if (type === ButtonTypes.memoryClear) setSavedValue(Values.emptyString);
    if (type === ButtonTypes.equal) {
      calculate();
    }
  };

  return {
    currentValue,
    clickHandler,
  };
};
