import { useState } from "react";
import * as defaults from "../config/googleMapsApi";

export default function useGoogleMapsMap() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const init = async () => {
    try {
      if (map) {
        console.log(
          "Mapa já foi inicializado. Não é necessário inicializá-lo novamente."
        );
        return;
      }

      const newMap = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        defaults.mapBaseConfig
      );
      setMap(newMap);
    } catch (error: unknown) {
      console.log("Ocorreu um erro ao inicializar um mapa: ", error);
    }
  };

  return {
    map,
    init,
  };
}
