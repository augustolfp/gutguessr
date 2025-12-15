import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

const genericPosition: google.maps.LatLngLiteral = {
  lat: -22.41422237388817,
  lng: -45.45034290777719,
};

const genericPov: google.maps.StreetViewPov = {
  heading: 0,
  pitch: 0
}

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
  position: google.maps.LatLngLiteral = genericPosition,
  pov: google.maps.StreetViewPov = genericPov
) => {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama") as HTMLElement,
    {
      position,
      pov,
      ...streetViewBaseConfig,
    }
  );

  return panorama;
};

export {
    loadStreetViewPanorama
};