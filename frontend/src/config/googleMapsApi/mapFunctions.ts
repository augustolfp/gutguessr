import * as defaults from "./defaults";

const init = async () => {
  const newMap = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    defaults.mapBaseConfig
  );

  return newMap;
};

const traceDistanceLine = (
  map: google.maps.Map,
  positionA: google.maps.LatLngLiteral,
  positionB: google.maps.LatLngLiteral
) => {
  const distanceLine = new google.maps.Polyline({
    path: [positionA, positionB],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  distanceLine.setMap(map);
};

const adjustZoomToFitPoints = async (
  map: google.maps.Map,
  positionA: google.maps.LatLngLiteral,
  positionB: google.maps.LatLngLiteral
) => {
  const bounds = new google.maps.LatLngBounds();
  bounds.extend(positionA);
  bounds.extend(positionB);
  map.fitBounds(bounds);
};

export { init, traceDistanceLine, adjustZoomToFitPoints };
