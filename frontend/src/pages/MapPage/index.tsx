import { useEffect } from "react";
import useGoogleApiContext from "../../hooks/useGoogleApiContext";

export default function MapPage() {
  const { initStreetViewPanorama, updateStreetViewPanorama } =
    useGoogleApiContext();

  useEffect(() => {
    initStreetViewPanorama();
  });

  const handleButtonClick = () => {
    updateStreetViewPanorama({
      position: {
        lat: 50.60821217869535,
        lng: 4.590171740162271,
      },
    });
  };

  return (
    <div className="w-full h-screen bg-pink-300 p-4">
      <div id="panorama" className="w-full h-1/2" />
      <div className="w-full h-1/4 bg-purple-600 mt-4">
        <button onClick={handleButtonClick}>Atualizar Panorama</button>
      </div>
    </div>
  );
}
