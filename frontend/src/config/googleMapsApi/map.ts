import * as defaults from "./defaults";

const init = async () => {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    defaults.mapBaseConfig
  );

  return map;
}

export {
    init
};