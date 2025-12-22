import { createContext } from "react";

interface AppContext {
  startGame: () => Promise<void>;
  submitGuessAndDisplayResult: () => Promise<void>;
}

export const AppContext = createContext({} as AppContext);