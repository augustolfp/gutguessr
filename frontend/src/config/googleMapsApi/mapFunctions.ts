import * as defaults from "./defaults";

const init = async () => {
  const newMap = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    defaults.mapBaseConfig
  );

  return newMap;
};

const adjustZoomToFitPoints = async (
  map: google.maps.Map,
  positionA: google.maps.LatLngLiteral | google.maps.LatLng | google.maps.LatLngAltitudeLiteral,
  positionB: google.maps.LatLngLiteral | google.maps.LatLng | google.maps.LatLngAltitudeLiteral
) => {
  const bounds = new google.maps.LatLngBounds();
  bounds.extend(positionA);
  bounds.extend(positionB);
  map.fitBounds(bounds);
};

export { init, adjustZoomToFitPoints };
