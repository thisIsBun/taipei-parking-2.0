import { createContext, useEffect, useState } from "react";
import { getPark, getParkAvl } from "../apis/WebAPI";
import { twd97_to_latlng } from "../constants/utils";
import PropTypes from "prop-types";

export const ParkContext = createContext([]);

export const ParkProvider = ({ children }) => {
  const [sortData, setSortData] = useState([]);
  const [updateTime, setUpdateTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const [parkRes, parkAvlRes] = await Promise.all([getPark(), getParkAvl()]);
    const rawData = parkRes.data.park;
    const rawAvlData = parkAvlRes.data.park;
    const rawAvlTime = parkAvlRes.data.UPDATETIME;

    const newData = rawAvlData
      .map((avlItem) => {
        const item = rawData.find((ele) => ele.id === avlItem.id);

        if (!item) return null;
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
        const opening =
          serviceTime === "00:00:00~23:59:59" ? "24小時" : serviceTime;

        const { id, availablecar, ChargeStation } = avlItem;
        const hasChargingStation = ChargeStation === undefined ? "無" : "有";
        if (availablecar <= 0) return null;
        return {
          id,
          name,
          availablecar,
          totalcar,
          payex,
          address,
          area,
          hasChargingStation,
          tel,
          opening,
          lat,
          lng,
        };
      })
      .filter((item) => item !== null);

    setSortData(newData);
    setUpdateTime(rawAvlTime);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(true);
  }, []);

  return (
    <ParkContext.Provider value={{ sortData, updateTime, isLoading }}>
      {children}
    </ParkContext.Provider>
  );
};

ParkProvider.propTypes = {
  children: PropTypes.node,
};
