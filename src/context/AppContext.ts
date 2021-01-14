import { createContext } from "react";

export const AppContext = createContext({
  clickHandler: (type: string, value?: string) => {},
});
