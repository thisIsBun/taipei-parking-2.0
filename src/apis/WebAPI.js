const PARK_URL = "https://tcgbusfs.blob.core.windows.net/blobtcmsv";

export const getPark = () => {
  return fetch(`${PARK_URL}/TCMSV_alldesc.json`).then((res) => res.json());
};

export const getParkAvl = () => {
  return fetch(`${PARK_URL}/TCMSV_allavailable.json`).then((res) => res.json());
};
