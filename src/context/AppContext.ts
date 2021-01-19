import { EventType } from "./../interfaces/interfaces";
import { createContext } from "react";

export const AppContext = createContext({
  clickHandler: (type: EventType, value?: string) => {},
});
