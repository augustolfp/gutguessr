import { useEffect } from "react";
import useGoogleApiContext from "../../hooks/useGoogleApiContext";

export default function MapPage() {
  const { initStreetViewPanorama } = useGoogleApiContext();

  useEffect(() => {
    initStreetViewPanorama();
  });



  return (
    <div className="w-full h-screen bg-pink-300 p-4">
      <div id="panorama" className="w-full h-full" />
    </div>
  );
}
