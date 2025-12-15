const genericPosition: google.maps.LatLngLiteral = {
  lat: -22.41422237388817,
  lng: -45.45034290777719,
};

const genericPov: google.maps.StreetViewPov = {
  heading: 0,
  pitch: 0,
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

const mapBaseConfig: google.maps.MapOptions = {
    center: genericPosition,
    clickableIcons: false,
    disableDefaultUI: true,
    zoom: 3,
    mapId: "DEMO_MAP_ID",
    gestureHandling: "greedy",
};

export {
  genericPosition,
  genericPov,
  streetViewBaseConfig,
  mapBaseConfig
};
