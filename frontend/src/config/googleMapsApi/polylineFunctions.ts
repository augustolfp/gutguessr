import "./defaults";

const init = async (
  map: google.maps.Map,
  points: google.maps.MVCArray<google.maps.LatLng> | (google.maps.LatLngLiteral | google.maps.LatLng)[] | null | undefined
) => {
  const polyline = new google.maps.Polyline({
    path: points,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  polyline.setMap(map);

  return polyline;
};

const updateVisibility = (
  polyline: google.maps.Polyline,
  isVisible: boolean
) => {
  polyline.setVisible(isVisible);
};

const updatePath = (
  polyline: google.maps.Polyline,
  points:
    | google.maps.MVCArray<google.maps.LatLng>
    | (google.maps.LatLngLiteral | google.maps.LatLng)[]
) => {
    polyline.setPath(points);
};

export { init, updateVisibility, updatePath };
