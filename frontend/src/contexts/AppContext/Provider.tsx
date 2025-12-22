import { useState } from "react";
import { AppContext } from "./context";

import { getRandomCoordinates, submitGuess } from "../../config/backendClient";
import useGameInterface from "../../hooks/useGameInterface";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function AppProvider({ children }: ProviderProps) {
  const [coordinateId, setCoordinateId] = useState<number | null>(null);

  const { userMarker, render, refresh, displayResultOnMap } =
    useGameInterface();

  const startGame = async () => {
    const { lat, lng, heading, pitch, id } = await getRandomCoordinates();
    await render(
      {
        lat,
        lng,
      },
      {
        heading,
        pitch,
      }
    );

    setCoordinateId(id);
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

    const { distanceInKm, score } = await submitGuess(coordinateId, lat, lng);

    await displayResultOnMap();

    console.log("DISTANCIA EM KM: ", distanceInKm);
    console.log("SCORE: ", score);
  };

  const renderNextRound = async () => {
    const { lat, lng, heading, pitch, id } = await getRandomCoordinates();
    setCoordinateId(id);
    await refresh(
      {
        lat,
        lng,
      },
      {
        heading,
        pitch,
      }
    );
  };

  return (
    <AppContext.Provider
      value={{
        startGame,
        submitGuessAndDisplayResult,
        renderNextRound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
