import { createContext } from "react";

interface AppContext {
  startGame: () => Promise<void>;
  goToNextRound: () => void;
}

export const AppContext = createContext({} as AppContext);