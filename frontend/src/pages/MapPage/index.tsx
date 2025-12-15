import { useEffect } from "react";
import useGoogleApiContext from "../../hooks/useGoogleApiContext";

export default function MapPage() {
  const { initStreetViewPanorama, updateStreetViewPanorama, initMap } =
    useGoogleApiContext();

  useEffect(() => {
    initStreetViewPanorama();
    initMap();
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
    <div className="w-full h-screen p-4">
      <div id="panorama" className="w-full h-1/2" />
      <div id="map" className="w-full h-1/4 bg-purple-600 mt-4">
        
      </div>
      <button onClick={handleButtonClick} className="btn btn-primary">Atualizar Panorama</button>
    </div>
  );
}
