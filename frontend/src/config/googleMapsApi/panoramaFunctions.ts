import * as defaults from "./defaults";

const init = async (
  position: google.maps.LatLngLiteral = defaults.genericPosition,
  pov: google.maps.StreetViewPov = defaults.genericPov
) => {
  const newPanorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama") as HTMLElement,
    {
      position,
      pov,
      ...defaults.streetViewBaseConfig,
    }
  );

  return newPanorama;
};

const update = (
  panorama: google.maps.StreetViewPanorama,
  newConfig: google.maps.StreetViewPanoramaOptions
) => {
  return panorama.setOptions(newConfig);
};

export { init, update };
