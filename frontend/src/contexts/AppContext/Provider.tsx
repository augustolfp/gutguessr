import { useState } from "react";
import { AppContext } from "./context";
import useGoogleMapsPanorama from "../../hooks/useGoogleMapsPanorama";
import useGoogleMapsMap from "../../hooks/useGoogleMapsMap";

import { getRandomCoordinates, submitGuess } from "../../config/backendClient";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function AppProvider({ children }: ProviderProps) {
  const [coordinateId, setCoordinateId] = useState<number | null>(null);
  const {
    // panorama,
    init: initPanorama,
    update: updatePanorama,
  } = useGoogleMapsPanorama();

  const {
    // map,
    init: initMap,
    userMarker,
  } = useGoogleMapsMap();

  const startGame = async () => {
    await initPanorama();
    await initMap();
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

    const { distanceInKm, score } =
      await submitGuess(coordinateId, lat, lng);

    console.log("Distância: ", distanceInKm);
    console.log("Score: ", score);
  };

  const goToNextRound = async () => {
    try {
      const { lat, lng, heading, pitch, id } = await getRandomCoordinates();
      setCoordinateId(id);

      updatePanorama({
        position: {
          lat,
          lng,
        },
        pov: {
          heading,
          pitch,
        },
      });
    } catch (error: unknown) {
      console.log("Ocorreu um erro ao atualizar coordenadas.", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        startGame,
        goToNextRound,
        submitGuessAndDisplayResult
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
