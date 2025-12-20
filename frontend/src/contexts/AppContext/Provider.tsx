import { AppContext } from "./context";
import { api } from "../../config/axios";
import useGoogleMapsPanorama from "../../hooks/useGoogleMapsPanorama";
import useGoogleMapsMap from "../../hooks/useGoogleMapsMap";
import type { Coordinate } from "../../types";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function AppProvider({ children }: ProviderProps) {
  const {
    // panorama,
    init: initPanorama,
    update: updatePanorama,
  } = useGoogleMapsPanorama();

  const {
    // map,
    init: initMap,
  } = useGoogleMapsMap();

  const startGame = async () => {
    await initPanorama();
    await initMap();
  };

  const getRandomCoordinates = async () => {
    const result = await api.get<Coordinate>("/locations/random");
    return result.data;
  };

  const goToNextRound = async () => {
    try {
      const { lat, lng, heading, pitch } = await getRandomCoordinates();
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
