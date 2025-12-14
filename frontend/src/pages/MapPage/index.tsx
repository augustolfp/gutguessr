import { useEffect } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { streetViewBaseConfig } from "../../config/googleMapsApiConfig";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

await importLibrary("maps");
await importLibrary("streetView");

export default function MapPage() {
  useEffect(() => {
    const streetViewOptions: google.maps.StreetViewPanoramaOptions = {
      position: {
        lat: 18.432081425952404,
        lng: 103.42956027000548,
      },
      pov: {
        heading: 307,
        pitch: 0,
      },
      ...streetViewBaseConfig,
    };

    async function setupMaps() {
      new google.maps.StreetViewPanorama(
        document.getElementById("panorama") as HTMLElement,
        streetViewOptions
      );
    }

    setupMaps();
  }, []);
  return (
    <div className="w-full h-screen bg-pink-300 p-4">
        <div id="panorama" className="w-full h-full" />
    </div>
  );
}
