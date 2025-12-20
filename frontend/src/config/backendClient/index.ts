import type { Coordinate } from "../../types";
import { api } from "../axios";

const getRandomCoordinates = async () => {
  const result = await api.get<Coordinate>("/locations/random");
  return result.data;
};

export { getRandomCoordinates };
