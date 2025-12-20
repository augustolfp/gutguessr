import { createContext } from "react";

interface AppContext {
  startGame: () => Promise<void>;
  goToNextRound: () => Promise<void>;
}

export const AppContext = createContext({} as AppContext);