import { useEffect } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { streetViewBaseConfig } from "../../config/googleMapsApiConfig";
import useGoogleApiContext from "../../contexts/GoogleApi/useGoogleApiContext";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

// const locations = [
//   {
//     lat: 18.432081425952404,
//     lng: 103.42956027000548,
//     heading: 307,
//     pitch: 0,
//   },
//   {
//     lat: 35.06281288328733,
//     lng: 134.20490283181627,
//     heading: 193,
//     pitch: 0,
//   },
//   {
//     lat: 30.409635521971207,
//     lng: -91.138758669815,
//     heading: 118,
//     pitch: 0,
//   },
// ];

await importLibrary("maps");
await importLibrary("streetView");

export default function MapPage() {
  const { updateStreetView } = useGoogleApiContext();
  useEffect(() => {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
      const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("panorama") as HTMLElement,
        streetViewOptions
      );

      await sleep(10000);

      console.log("Atualizando posição do panorama...");

      panorama.setPosition({
        lat: 35.06281288328733,
        lng: 134.20490283181627,
      });
    }

    setupMaps();
  }, []);
  return (
    <div className="w-full h-screen bg-pink-300 p-4">
      <div id="panorama" className="w-full h-full" />
    </div>
  );
}
