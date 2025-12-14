import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

const genericLocation: google.maps.LatLngLiteral = {
  lat: -13.3268339,
  lng: -41.1476912,
};

const streetViewBaseConfig: google.maps.StreetViewPanoramaOptions = {
  addressControl: false,
  disableDefaultUI: true,
  motionTracking: false,
  motionTrackingControl: false,
  showRoadLabels: false,
  zoomControlOptions: {
    position: 6,
  },
};

await importLibrary("maps");
await importLibrary("streetView");

const streetViewPanorama = new google.maps.StreetViewPanorama(
  document.getElementById("panorama") as HTMLElement,
  {
    position: genericLocation,
    ...streetViewBaseConfig,
  }
);

export { streetViewPanorama };
