import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

setOptions({
  key: `${import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}`,
});

await importLibrary("maps");
await importLibrary("streetView");