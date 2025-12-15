import { useState } from "react";
import { GoogleApiContext } from "./context";
import { loadStreetViewPanorama } from "./config";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function GoogleApiProvider({ children }: ProviderProps) {
  const [streetViewPanorama, setStreetViewPanorama] = useState<google.maps.StreetViewPanorama | null>(null);

  const initStreetViewPanorama = async () => {
    try {

      if (streetViewPanorama) {
        console.log("Panorama já foi inicializado. Não é necessário inicializá-lo novamente.");
        return;
      }

      const panorama = await loadStreetViewPanorama();
      setStreetViewPanorama(panorama);
      console.log("Panorama inicializado.");
    } catch (error: unknown) {
      console.log("Ocorreu um erro ao inicializar um StreetView Panorama: ", error);
    }
  };

  const updateStreetView = () => {};

  return (
    <GoogleApiContext.Provider
      value={{
        initStreetViewPanorama,
        updateStreetView,
      }}
    >
      {children}
    </GoogleApiContext.Provider>
  );
}
