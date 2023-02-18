import { API_KEY } from "../../constants/.env.local";
import styled from "styled-components";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Search from "../../components/Search";
import Loader from "../../components/Loader";

const MapWrapper = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
`;

const libraries = ["places"];

export default function HomePage() {
  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  const [center, setCenter] = useState({ lat: 25.03369, lng: 121.564128 });
  const [isDeviceLocation, setIsDeviceLocation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  const succss = ({ coords: { latitude, longitude } }) => {
    setCenter({
      lat: latitude,
      lng: longitude,
    });
    setIsDeviceLocation(true);
    setIsLoading(false);
  };

  const error = () => {
    setIsLoading(false);
  };

  if (!isLoaded) {
    return <Loader />;
  }

  const handlePositionCenter = () => {
    map.panTo(center);
  };

  return (
    <MapWrapper>
      <Search
        handlePositionCenter={handlePositionCenter}
        Autocomplete={Autocomplete}
        isLoading={isLoading}
      />
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          mapTypeControl: false,
          styles: theme.mapStyle.styles,
          fullscreenControl: false,
        }}
        onLoad={(map) => {
          setMap(map);
          navigator.geolocation.getCurrentPosition(succss, error);
          setIsLoading(true);
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </MapWrapper>
  );
}
