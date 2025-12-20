import { AppContext } from "./context";
import useGoogleMapsPanorama from "../../hooks/useGoogleMapsPanorama";
import useGoogleMapsMap from "../../hooks/useGoogleMapsMap";

import { getRandomCoordinates } from "../../config/backendClient";

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
