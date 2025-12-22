import * as defaults from "./defaults";

const init = async () => {
  const newMap = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    defaults.mapBaseConfig
  );

  return newMap;
};

export { init };
