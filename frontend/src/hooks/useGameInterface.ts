import { useState } from "react";

import * as panoramaFunctions from "../config/googleMapsApi/panoramaFunctions";
import * as mapFunctions from "../config/googleMapsApi/mapFunctions";
import * as markerFunctions from "../config/googleMapsApi/markerFunctions";
import * as polylineFunctions from "../config/googleMapsApi/polylineFunctions";

export default function useGameInterface() {
  const [panorama, setPanorama] =
    useState<google.maps.StreetViewPanorama | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userMarker, setUserMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [exactMarker, setExactMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [distanceLine, setDistanceLine] = useState<google.maps.Polyline | null>(
    null
  );

  const render = async (
    position: google.maps.LatLngLiteral,
    pov?: google.maps.StreetViewPov
  ) => {
    const newPanorama = await panoramaFunctions.init(position, pov);
    const newMap = await mapFunctions.init();
    const newUserMarker = await markerFunctions.init(newMap, true);
    const newExactMarker = await markerFunctions.init(newMap, false);
    const newDistanceLine = await polylineFunctions.init(newMap, []);

    markerFunctions.updatePosition(newExactMarker, position);
    polylineFunctions.updateVisibility(newDistanceLine, false);

    setPanorama(newPanorama);
    setMap(newMap);
    setUserMarker(newUserMarker);
    setExactMarker(newExactMarker);
    setDistanceLine(newDistanceLine);
  };

  const refresh = async (
    position: google.maps.LatLngLiteral,
    pov?: google.maps.StreetViewPov
  ) => {
    if (!panorama || !userMarker || !exactMarker || !map || !distanceLine) {
      return;
    }

    panoramaFunctions.update(panorama, {
      position,
      pov,
    });

    markerFunctions.updateVisibility(userMarker, map, false);
    markerFunctions.updateVisibility(exactMarker, map, false);
    markerFunctions.updatePosition(exactMarker, position);
    polylineFunctions.updateVisibility(distanceLine, false);
  };

  const displayResultOnMap = async () => {
    if (
      !exactMarker ||
      !map ||
      !userMarker?.position ||
      !exactMarker.position ||
      !distanceLine
    ) {
      return;
    }
    markerFunctions.updateVisibility(exactMarker, map, true);

    polylineFunctions.updatePath(distanceLine, [
      userMarker.position,
      exactMarker.position,
    ]);
    polylineFunctions.updateVisibility(distanceLine, true);

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
