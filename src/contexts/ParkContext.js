import { createContext, useEffect, useState } from "react";
import { getPark, getParkAvl } from "../apis/WebAPI";
import { twd97_to_latlng } from "../constants/utils";
import PropTypes from "prop-types"

export const ParkContext = createContext([])

export const ParkProvider = ({children}) => {
const [sortData, setSortData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [parkRes, parkAvlRes] = await Promise.all([
        getPark(),
        getParkAvl(),
      ]);
      const rawData = parkRes.data.park;
      const rawAvlData = parkAvlRes.data.park;
      const newData = rawData
        .map((item) => {
          const avlItem = rawAvlData.find((avl) => avl.id === item.id);

          if (!avlItem) return null;
          const {
            name,
            totalcar,
            payex,
            tel,
            serviceTime,
            tw97x,
            tw97y,
            area,
            address,
          } = item;
          const { lat, lng } = twd97_to_latlng(tw97x, tw97y);

          const { id, availablecar, ChargeStation } = avlItem;
          if (availablecar <= 0) return null;

          return {
            id,
            name,
            availablecar,
            totalcar,
            payex,
            address,
            area,
            ChargeStation,
            tel,
            serviceTime,
            lat,
            lng,
          };
        })
        .filter((item) => item !== null);
      setSortData(newData);
    };
    fetchData();
  }, []);

  return (
    <ParkContext.Provider value={sortData}>
      {children}
    </ParkContext.Provider>
  );
}

ParkProvider.propTypes = {
  children: PropTypes.node
}