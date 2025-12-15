import { createContext } from "react";

interface GoogleApiContext {
  initStreetViewPanorama: () => Promise<void>;
  updateStreetViewPanorama: (newConfig: google.maps.StreetViewPanoramaOptions) => void;
}

export const GoogleApiContext = createContext({} as GoogleApiContext);