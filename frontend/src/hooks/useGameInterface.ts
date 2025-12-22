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
    position: google.maps.LatLngLiteral,
    pov?: google.maps.StreetViewPov
  ) => {
    const newPanorama = await panoramaFunctions.init(position, pov);
    const newMap = await mapFunctions.init();
    const newUserMarker = await markerFunctions.init(newMap, true);
    const newExactMarker = await markerFunctions.init(newMap, false);
    markerFunctions.updatePosition(newExactMarker, position);

    setPanorama(newPanorama);
    setMap(newMap);
    setUserMarker(newUserMarker);
    setExactMarker(newExactMarker);
  };

  const refresh = async (
    position: google.maps.LatLngLiteral,
    pov?: google.maps.StreetViewPov
  ) => {
    if (!panorama || !userMarker || !exactMarker || !map) {
      return;
    }

    panoramaFunctions.update(panorama, {
      position,
      pov,
    });

    markerFunctions.updateVisibility(userMarker, map, false);
    markerFunctions.updateVisibility(exactMarker, map, false);
    markerFunctions.updatePosition(exactMarker, position);
  };

  const displayResultOnMap = async () => {
    if (
      !exactMarker ||
      !map ||
      !userMarker?.position ||
      !exactMarker.position
    ) {
      return;
    }
    markerFunctions.updateVisibility(exactMarker, map, true);

    mapFunctions.traceDistanceLine(
      map,
      userMarker.position,
      exactMarker.position
    );

    await mapFunctions.adjustZoomToFitPoints(
      map,
      userMarker.position,
      exactMarker.position
    );
  };

  return {
    panorama,
    map,
    userMarker,
    exactMarker,

    render,
    refresh,
    displayResultOnMap,
  };
}
