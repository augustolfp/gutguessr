import { useState } from "react";
import { GoogleApiContext } from "./context";
import * as googleApiFunctions from "../../config/googleMapsApi";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function GoogleApiProvider({ children }: ProviderProps) {
  const [streetViewPanorama, setStreetViewPanorama] =
    useState<google.maps.StreetViewPanorama | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const initStreetViewPanorama = async () => {
    try {
      if (streetViewPanorama) {
        console.log(
          "Panorama já foi inicializado. Não é necessário inicializá-lo novamente."
        );
        return;
      }

      const panorama = await googleApiFunctions.initStreetViewPanorama();
      setStreetViewPanorama(panorama);
      console.log("Panorama inicializado.");
    } catch (error: unknown) {
      console.log(
        "Ocorreu um erro ao inicializar um StreetView Panorama: ",
        error
      );
    }
  };

  const updateStreetViewPanorama = (
    newConfig: google.maps.StreetViewPanoramaOptions
  ) => {
    if (!streetViewPanorama) {
      console.log(
        "Foi disparado um update do StreetView Panorama, porém este não está inicializado. Nenhuma ação foi executada."
      );
      return;
    }

    streetViewPanorama.setOptions(newConfig);
  };

  const initMap = async () => {
    try {
      if (map) {
        console.log(
          "Mapa já foi inicializado. Não é necessário inicializá-lo novamente."
        );
        return;
      }

      const newMap = await googleApiFunctions.initMap();
      setMap(newMap);
    } catch (error: unknown) {
      console.log("Ocorreu um erro ao inicializar um mapa: ", error);
    }
  };

  return (
    <GoogleApiContext.Provider
      value={{
        initStreetViewPanorama,
        updateStreetViewPanorama,
        initMap,
      }}
    >
      {children}
    </GoogleApiContext.Provider>
  );
}
