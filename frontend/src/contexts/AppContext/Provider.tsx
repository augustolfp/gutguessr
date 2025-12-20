import { AppContext } from "./context";
import useGoogleMapsPanorama from "../../hooks/useGoogleMapsPanorama";
import useGoogleMapsMap from "../../hooks/useGoogleMapsMap";

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

  const goToNextRound = () => {
    updatePanorama({
      position: {
        lat: 50.60821217869535,
        lng: 4.590171740162271,
      },
    });
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
