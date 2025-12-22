import { useState } from "react";

import * as panoramaFunctions from "../config/googleMapsApi/panoramaFunctions";
import * as mapFunctions from "../config/googleMapsApi/mapFunctions";
import * as markerFunctions from "../config/googleMapsApi/markerFunctions";

export default function useGameInterface() {
  const [panorama, setPanorama] =
    useState<google.maps.StreetViewPanorama | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userMarker, setUserMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [exactMarker, setExactMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  const render = async (
    position?: google.maps.LatLngLiteral,
    pov?: google.maps.StreetViewPov
  ) => {
    const newPanorama = await panoramaFunctions.init(position, pov);
    const newMap = await mapFunctions.init();
    const newUserMarker = await markerFunctions.init(newMap, true);
    const newExactMarker = await markerFunctions.init(newMap, false);

    setPanorama(newPanorama);
    setMap(newMap);
    setUserMarker(newUserMarker);
    setExactMarker(newExactMarker);
  };

  const updateExactMarker = (lat: number, lng: number, isVisible: boolean) => {
    if (!exactMarker) {
      return;
    }

    markerFunctions.updatePosition(exactMarker, lat, lng);

    if (isVisible) {
      exactMarker.map = map;
    }

    if (!isVisible) {
      exactMarker.map = null;
    }
  };

  return {
    panorama,
    map,
    userMarker,
    exactMarker,

    render,
    updateExactMarker,
  };
}
