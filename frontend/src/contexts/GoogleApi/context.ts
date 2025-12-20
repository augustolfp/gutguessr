import { createContext } from "react";

interface GoogleApiContext {
  startGame: () => Promise<void>;
  goToNextRound: () => void;

}

export const GoogleApiContext = createContext({} as GoogleApiContext);