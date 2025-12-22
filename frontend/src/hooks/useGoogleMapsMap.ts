import { useState } from "react";
import * as defaults from "../config/googleMapsApi";

export default function useGoogleMapsMap() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userMarker, setUserMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

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

      const newUserMarker = new google.maps.marker.AdvancedMarkerElement({
        position: null,
      });

      newMap.addListener(
        "click",
        (mapsMouseEvent: google.maps.MapMouseEvent) => {
          if (mapsMouseEvent.latLng) {
            const { lat, lng } = mapsMouseEvent.latLng;
            newUserMarker.map = newMap;
            newUserMarker.position = { lat: lat(), lng: lng() };
          }
        }
      );

      setMap(newMap);
      setUserMarker(newUserMarker);
    } catch (error: unknown) {
      console.log("Ocorreu um erro ao inicializar um mapa: ", error);
    }
  };

  return {
    map,
    userMarker,
    init,
  };
}
