import { createContext } from "react";

interface GoogleApiContext {
  updateStreetView: () => void;
}

export const GoogleApiContext = createContext({} as GoogleApiContext);