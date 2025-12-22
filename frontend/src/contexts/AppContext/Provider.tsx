import { useState } from "react";
import { AppContext } from "./context";

import { getRandomCoordinates, submitGuess } from "../../config/backendClient";
import useGameInterface from "../../hooks/useGameInterface";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function AppProvider({ children }: ProviderProps) {
  const [coordinateId, setCoordinateId] = useState<number | null>(null);

  const { userMarker, render, updateExactMarker } = useGameInterface();

  const startGame = async () => {
    const randomCoordinates = await getRandomCoordinates();
    await render(
      {
        lat: randomCoordinates.lat,
        lng: randomCoordinates.lng,
      },
      {
        heading: randomCoordinates.heading,
        pitch: randomCoordinates.pitch,
      }
    );

    setCoordinateId(randomCoordinates.id);
  };

  const submitGuessAndDisplayResult = async () => {
    if (!userMarker || !userMarker.position || !coordinateId) {
      return;
    }

    const lat =
      typeof userMarker.position.lat === "number"
        ? userMarker.position.lat
        : userMarker.position.lat();
    const lng =
      typeof userMarker.position.lng === "number"
        ? userMarker.position.lng
        : userMarker.position.lng();

    const { exactLocation, distanceInKm, score } = await submitGuess(
      coordinateId,
      lat,
      lng
    );

    updateExactMarker(exactLocation.lat, exactLocation.lng, true);

    console.log("DISTANCIA EM KM: ", distanceInKm);
    console.log("SCORE: ", score);
  };

  return (
    <AppContext.Provider
      value={{
        startGame,
        submitGuessAndDisplayResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
