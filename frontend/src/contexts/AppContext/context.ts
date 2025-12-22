import { createContext } from "react";

interface AppContext {
  startGame: () => Promise<void>;
  submitGuessAndDisplayResult: () => Promise<void>;
  renderNextRound: () => Promise<void>;
}

export const AppContext = createContext({} as AppContext);