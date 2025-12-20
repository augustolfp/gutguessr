import { useState } from "react";
import * as defaults from "../config/googleMapsApi";

export default function useGoogleMapsPanorama() {
  const [panorama, setPanorama] =
    useState<google.maps.StreetViewPanorama | null>(null);

  const init = async (
    position: google.maps.LatLngLiteral = defaults.genericPosition,
    pov: google.maps.StreetViewPov = defaults.genericPov
  ) => {
    try {
      if (panorama) {
        console.log(
          "Panorama já foi inicializado. Não é necessário inicializá-lo novamente."
        );
        return;
      }

      const newPanorama = new google.maps.StreetViewPanorama(
        document.getElementById("panorama") as HTMLElement,
        {
          position,
          pov,
          ...defaults.streetViewBaseConfig,
        }
      );

      setPanorama(newPanorama);
      console.log("Panorama inicializado.");
    } catch (error: unknown) {
      console.log(
        "Ocorreu um erro ao inicializar um StreetView Panorama: ",
        error
      );
    }
  };

  const update = (newConfig: google.maps.StreetViewPanoramaOptions) => {
    if (!panorama) {
      console.log(
        "Foi disparado um update do StreetView Panorama, porém este não está inicializado. Nenhuma ação foi executada."
      );
      return;
    }

    panorama.setOptions(newConfig);
  };

  return {
    panorama,
    init,
    update,
  };
}
