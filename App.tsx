import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonRow from "./src/components/ButtonRow";
import { ButtonsValue } from "./src/constants/constants";

export default function App() {
  const [result, setResult] = useState("");
  const [savedValue, setSavedValue] = useState("0");
  const [expression, setExpression] = useState("");

  console.log("result ", result);
  console.log("expression ", expression);
  const evaluate = (expression: string) => {
    return eval(expression).toString();
  };
  const memoryAddHandler = () => {
    setSavedValue((saved) => eval(saved + result));
  };
  const memorySubstractHandler = () => {
    setSavedValue((saved) => eval(`${saved}-${result}`));
  };
  const memoryClear = () => setSavedValue("0");
  const memoryRead = () => {
    setResult(savedValue);
  };
  const changeSign = () => {
    setResult((res) => eval(`${res}*(-1)`).toString());
  };
  const toPercent = () => {
    setResult((res) => eval(`${res}/100`).toString());
  };
  const cleanUp = () => {
    setResult("");
    setExpression("");
  };
  const saveBtnValue = (value: string) => {
    if (/[\+\*\/\-]$/.test(expression)) {
      setResult("");
      setExpression((e) => e.concat(value));
      setResult((r) => r.concat(value));
    } else {
      setExpression((e) => e.concat(value));
      setResult((r) => r.concat(value));
    }
  };

  const calculate = () => {
    setExpression((e) => {
      setResult(evaluate(e));
      return evaluate(e);
    });
  };

  const operate = (value: string) => {
    setExpression((e) => {
      setResult(evaluate(e));
      return evaluate(e);
    });
    setExpression((e) => e.concat(value));
  };

  const handleClick = (value: string) => {
    console.log(value);
    if (value === "AC") {
      return cleanUp();
    }
    if (value === "changeSign") {
      return changeSign();
    }
    if (/[0-9]/.test(value)) {
      return saveBtnValue(value);
    }
    if (value === ".") {
      if (/\.+/g.test(result) || result === "") {
        return null;
      } else return saveBtnValue(value);
    }
    if (value === "=") {
      return calculate();
    }
    if (/[\+\*\/\-]/.test(value)) {
      if (/[\+\*\/\-]$/.test(expression)) {
        setExpression((e) => {
          return e.slice(0, -1).concat(value);
        });
        return operate;
      } else return operate(value);
    }
    if (value === "%") {
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.displayContainer}>
        <Text style={styles.display}>
          {result ? result.replace(".", ",") : "0"}
        </Text>
      </View>
      <View style={styles.keyboard}>
        {ButtonsValue.map((row, index) => (
          <ButtonRow
            onPress={handleClick}
            key={`row-${index}`}
            rowItems={row}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  displayContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  display: {
    color: "#fff",
    fontSize: 60,
    paddingHorizontal: 8,
  },
  keyboard: {
    flex: 8,
    alignItems: "center",
  },
});
