import * as defaults from "./defaults";

const init = async (
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

export {
    init
};