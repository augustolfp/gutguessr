import axios from "axios";
import type { Coordinate } from "../../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const getRandomCoordinates = async () => {
  const result = await api.get<Coordinate>("/locations/random");
  return result.data;
};

interface GuessResponse {
  exactLocation: {
    lat: number;
    lng: number;
  };
  guessedLocation: {
    lat: number;
    lng: number;
  };
  distanceInKm: number;
  score: number;
}

const submitGuess = async (locationId: number, lat: number, lng: number) => {
  const result = await api.post<GuessResponse>("/location/guess", {
    locationId,
    lat,
    lng,
  });

  return result.data;
};

export { getRandomCoordinates, submitGuess };
