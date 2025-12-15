import { createContext } from "react";

interface GoogleApiContext {
  initStreetViewPanorama: () => Promise<void>;
  updateStreetView: () => void;
}

export const GoogleApiContext = createContext({} as GoogleApiContext);