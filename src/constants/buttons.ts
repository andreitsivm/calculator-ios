import { Colors, ButtonTypes, Symbols, Values } from "./constants";
import { iButton } from "../interfaces/interfaces";

export const ButtonsProperties: Array<iButton[]> = [
  [
    {
      symbol: Symbols.clearAll,
      color: Colors.lightGrey,
      type: ButtonTypes.clearAll,
    },
    {
      symbol: Symbols.changeSign,
      color: Colors.lightGrey,
      type: ButtonTypes.changeSign,
    },
    {
      symbol: Symbols.percent,
      color: Colors.lightGrey,
      type: ButtonTypes.percentage,
    },
    {
      symbol: Symbols.division,
      color: Colors.orange,
      type: ButtonTypes.operator,
      value: Values.division,
    },
  ],
  [
    {
      symbol: Symbols.memoryClear,
      color: Colors.darkGrey,
      type: ButtonTypes.memoryClear,
    },
    {
      symbol: Symbols.memoryRead,
      color: Colors.darkGrey,
      type: ButtonTypes.memoryRead,
    },
    {
      symbol: Symbols.memorySubstract,
      color: Colors.darkGrey,
      type: ButtonTypes.memorySubstract,
    },
    {
      symbol: Symbols.memoryAdd,
      color: Colors.orange,
      type: ButtonTypes.memoryAdd,
    },
  ],
  [
    {
      symbol: Symbols.seven,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.seven,
    },
    {
      symbol: Symbols.eight,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.eight,
    },
    {
      symbol: Symbols.nine,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.nine,
    },
    {
      symbol: Symbols.mult,
      color: Colors.orange,
      type: ButtonTypes.operator,
      value: Values.mult,
    },
  ],
  [
    {
      symbol: Symbols.four,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.four,
    },
    {
      symbol: Symbols.five,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.five,
    },
    {
      symbol: Symbols.six,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.six,
    },
    {
      symbol: Symbols.minus,
      color: Colors.orange,
      type: ButtonTypes.operator,
      value: Values.minus,
    },
  ],
  [
    {
      symbol: Symbols.one,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.one,
    },
    {
      symbol: Symbols.two,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.two,
    },
    {
      symbol: Symbols.three,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.three,
    },
    {
      symbol: Symbols.plus,
      color: Colors.orange,
      type: ButtonTypes.operator,
      value: Values.plus,
    },
  ],
  [
    {
      symbol: Symbols.zero,
      color: Colors.darkGrey,
      doubled: true,
      type: ButtonTypes.number,
      value: Values.zero,
    },
    {
      symbol: Symbols.comma,
      color: Colors.darkGrey,
      type: ButtonTypes.number,
      value: Values.point,
    },
    { symbol: Symbols.equal, color: Colors.orange, type: ButtonTypes.equal },
  ],
];
