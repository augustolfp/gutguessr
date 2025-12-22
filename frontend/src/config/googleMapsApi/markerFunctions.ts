import "./defaults";

const init = async (map: google.maps.Map, isInteractive: boolean) => {
  const newMarker = new google.maps.marker.AdvancedMarkerElement({
    position: null,
  });

  if (isInteractive) {
    map.addListener("click", (mapsMouseEvent: google.maps.MapMouseEvent) => {
      if (mapsMouseEvent.latLng) {
        const { lat, lng } = mapsMouseEvent.latLng;
        newMarker.map = map;
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
  marker.position = {
    lat,
    lng,
  };
};

const updateVisibility = (
  marker: google.maps.marker.AdvancedMarkerElement,
  map: google.maps.Map,
  isVisible: boolean
) => {
  if (isVisible) {
    marker.map = map;
  }

  if (!isVisible) {
    marker.map = null;
  }
};

export { init, updatePosition, updateVisibility };
