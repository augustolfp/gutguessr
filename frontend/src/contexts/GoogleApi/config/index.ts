import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import * as defaults from "./defaults";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

await importLibrary("maps");
await importLibrary("streetView");

const loadStreetViewPanorama = async (
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

export { loadStreetViewPanorama };
