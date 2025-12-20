import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

setOptions({
  key: `${process.env.GOOGLE_CLOUD_API_KEY}`,
});

await importLibrary("geometry");

const computeDistanceBetweenCoordinates = async (
  positionA: google.maps.LatLngLiteral,
  positionB: google.maps.LatLngLiteral
) => {
  const distanceInMeters =
    google.maps.geometry.spherical.computeDistanceBetween(positionA, positionB);

  //   Retornar distância em km:
  return Math.floor(distanceInMeters / 1000);
};

export { computeDistanceBetweenCoordinates };
