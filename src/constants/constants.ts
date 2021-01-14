import { iButton } from "./../interfaces/interfases";

export const ButtonsProperties: Array<iButton[]> = [
  [
    { symbol: "AC", color: "#a4a4a4", type: "clearAll" },
    { symbol: "+/-", color: "#a4a4a4", type: "changeSign" },
    { symbol: "%", color: "#a4a4a4", type: "percentage" },
    { symbol: "÷", color: "#ff9a0a", type: "operator", value: "/" },
  ],
  [
    { symbol: "mc", color: "#333", type: "mc" },
    { symbol: "mr", color: "#333", type: "mr" },
    { symbol: "m-", color: "#333", type: "m-" },
    { symbol: "m+", color: "#ff9a0a", type: "m+" },
  ],
  [
    { symbol: "7", color: "#333", type: "number", value: "7" },
    { symbol: "8", color: "#333", type: "number", value: "8" },
    { symbol: "9", color: "#333", type: "number", value: "9" },
    { symbol: "×", color: "#ff9a0a", type: "operator", value: "*" },
  ],
  [
    { symbol: "4", color: "#333", type: "number", value: "4" },
    { symbol: "5", color: "#333", type: "number", value: "5" },
    { symbol: "6", color: "#333", type: "number", value: "6" },
    { symbol: "-", color: "#ff9a0a", type: "operator", value: "-" },
  ],
  [
    { symbol: "1", color: "#333", type: "number", value: "1" },
    { symbol: "2", color: "#333", type: "number", value: "2" },
    { symbol: "3", color: "#333", type: "number", value: "3" },
    { symbol: "+", color: "#ff9a0a", type: "operator", value: "+" },
  ],
  [
    { symbol: "0", color: "#333", doubled: true, type: "number", value: "0" },
    { symbol: ",", color: "#333", type: "number", value: "." },
    { symbol: "=", color: "#ff9a0a", type: "equal" },
  ],
];
