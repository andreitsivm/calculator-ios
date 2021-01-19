import { ButtonTypes } from "../constants/constants";

export interface iButton {
  symbol: string;
  doubled?: boolean;
  color: string;
  type: EventType;
  value?: string;
}

export interface iEventKeyTypes {
  [ButtonTypes.number]: () => void;
  [ButtonTypes.equal]: () => void;
  [ButtonTypes.operator]: () => void;
  [ButtonTypes.memoryClear]: () => void;
  [ButtonTypes.memoryRead]: () => void;
  [ButtonTypes.memorySubstract]: () => void;
  [ButtonTypes.memoryAdd]: () => void;
  [ButtonTypes.changeSign]: () => void;
  [ButtonTypes.percentage]: () => void;
  [ButtonTypes.clearAll]: () => void;
}
export type EventType =
  | ButtonTypes.number
  | ButtonTypes.equal
  | ButtonTypes.operator
  | ButtonTypes.memoryClear
  | ButtonTypes.memoryRead
  | ButtonTypes.memorySubstract
  | ButtonTypes.memoryAdd
  | ButtonTypes.changeSign
  | ButtonTypes.percentage
  | ButtonTypes.clearAll;
