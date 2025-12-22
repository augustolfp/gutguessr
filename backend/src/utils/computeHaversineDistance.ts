interface Position {
  lat: number;
  lng: number;
}

// Raio da terra em km:
const earthRadius = 6371;

const convertDegreesToRadians = (angle: number) => (angle * Math.PI) / 180;

export default function computeHaversineDistance(
  positionA: Position,
  positionB: Position
) {
  const deltaLat = convertDegreesToRadians(positionB.lat - positionA.lat);
  const deltaLng = convertDegreesToRadians(positionB.lng - positionA.lng);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(convertDegreesToRadians(positionA.lat)) *
      Math.cos(convertDegreesToRadians(positionB.lat)) *
      Math.sin(deltaLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}
