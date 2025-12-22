import "./defaults";

const init = async (map: google.maps.Map, isInteractive: boolean) => {
  const newMarker = new google.maps.marker.AdvancedMarkerElement({
    position: null,
    map,
  });

  if (isInteractive) {
    map.addListener("click", (mapsMouseEvent: google.maps.MapMouseEvent) => {
      if (mapsMouseEvent.latLng) {
        const { lat, lng } = mapsMouseEvent.latLng;
        newMarker.position = { lat: lat(), lng: lng() };
      }
    });
  }

  return newMarker;
};

const updatePosition = (
  marker: google.maps.marker.AdvancedMarkerElement,
  lat: number,
  lng: number
) => {
  return (marker.position = { lat: lat, lng: lng });
};

export { init, updatePosition };
