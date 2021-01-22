import { EventType, iEventKeyTypes } from "./../interfaces/interfaces";
import { ButtonTypes, Values } from "./../constants/constants";
import { useState } from "react";

interface T {
  clickHandler: (type: EventType, value?: string) => void;
  currentValue: string;
}

export const useCalc = (): T => {
  const containPointRegexp = /\.+/;
  const startWithZeroRegexp = /^[0]/;
  const maxLength = 9;
  const maxLengthForPoint = 8;
  const initValue = "";
  const [currentValue, setCurrent] = useState<string>(initValue);
  const [prevValue, setPrev] = useState<string>(initValue);
  const [savedValue, setSavedValue] = useState<string>("0");
  const [operator, setOperator] = useState<string>(initValue);

  const setNumber = (value: string) => {
    if (currentValue.length <= maxLength) {
      switch (value) {
        case Values.zero: {
          if (currentValue === Values.zero) {
            return;
          }

          if (currentValue === Values.emptyString) {
            setCurrent(`${value}`);
            return;
          }

          if (currentValue !== Values.emptyString) {
            setCurrent(`${currentValue}${value}`);
            return;
          }
          break;
        }
        case Values.point: {
          if (currentValue.length <= maxLengthForPoint) {
            if (
              !containPointRegexp.test(currentValue) &&
              currentValue === Values.emptyString
            ) {
              setCurrent(`${Values.zero}${value}`);
              return;
            }
            if (!containPointRegexp.test(currentValue) && currentValue) {
              setCurrent(`${currentValue}${value}`);
              return;
            }
          }
          break;
        }
        case Values.one:
        case Values.two:
        case Values.three:
        case Values.four:
        case Values.five:
        case Values.six:
        case Values.seven:
        case Values.eight:
        case Values.nine: {
          if (currentValue !== Values.zero) {
            setCurrent(`${currentValue}${value}`);
          } else {
            setCurrent(`${value}`);
          }

          break;
        }
      }
    }
  };
  const calculate = () => {
    const res = eval(`${prevValue}${operator}${currentValue}`);
    res.toString();
    setCurrent(res);
    setOperator(Values.emptyString);
    setPrev(Values.emptyString);
  };

  const clickHandler = (type: EventType, value?: string) => {
    const types: iEventKeyTypes = {
      [ButtonTypes.number]: () => setNumber(value!),
      [ButtonTypes.equal]: () => calculate(),
      [ButtonTypes.operator]: () => {
        setOperator(value!);
        setPrev(currentValue);
        setCurrent(Values.emptyString);
      },
      [ButtonTypes.memoryClear]: () => setSavedValue(Values.emptyString),
      [ButtonTypes.memoryRead]: () => setCurrent(savedValue),
      [ButtonTypes.memorySubstract]: () =>
        setSavedValue(
          (saved) => `${parseFloat(saved) - parseFloat(currentValue)}`
        ),
      [ButtonTypes.memoryAdd]: () =>
        setSavedValue(
          (saved) => `${parseFloat(saved) + parseFloat(currentValue)}`
        ),
      [ButtonTypes.changeSign]: () =>
        setCurrent((current) =>
          current !== Values.emptyString ? `${parseFloat(current) * -1}` : ""
        ),
      [ButtonTypes.percentage]: () =>
        setCurrent((current) =>
          current !== Values.emptyString ? `${parseFloat(current) * 0.01}` : ""
        ),
      [ButtonTypes.clearAll]: () => {
        setCurrent(Values.emptyString);
        setPrev(Values.emptyString);
        setOperator(Values.emptyString);
      },
    };
    const click = types[type];
    click();
  };

  return {
    currentValue,
    clickHandler,
  };
};
