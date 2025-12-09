import fs from "fs/promises";

export const getLocationsList = async () => {
  const locationsListRaw = await fs.readFile("./locations.json");
  const parsedList = JSON.parse(locationsListRaw.toString());

  return parsedList.map((location: any) => {
    return {
      lat: location.lat,
      lng: location.lng,
      heading: location.heading,
      pitch: location.pitch,
    };
  });
};
