import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

const genericStartingPoint: google.maps.LatLngLiteral = {
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

const loadStreetViewPanorama = async (
  position: google.maps.LatLngLiteral = genericStartingPoint
) => {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama") as HTMLElement,
    {
      position,
      ...streetViewBaseConfig,
    }
  );

  return panorama;
};

export {
    loadStreetViewPanorama
};