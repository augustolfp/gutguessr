import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import * as defaults from "./defaults";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

await importLibrary("maps");
await importLibrary("streetView");

const initStreetViewPanorama = async (
  position: google.maps.LatLngLiteral = defaults.genericPosition,
  pov: google.maps.StreetViewPov = defaults.genericPov
) => {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama") as HTMLElement,
    {
      position,
      pov,
      ...defaults.streetViewBaseConfig,
    }
  );

  return panorama;
};

const initMap = async () => {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    defaults.mapBaseConfig
  );

  return map;
}

export { initStreetViewPanorama, initMap };
