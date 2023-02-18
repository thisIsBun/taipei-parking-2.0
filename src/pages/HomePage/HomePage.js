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
import { type } from "@testing-library/user-event/dist/type";

const MapWrapper = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
`;

const center = {
  lat: 25.040348,
  lng: 121.533095,
};

export default function HomePage() {
  const [map, setMap] = useState(/** @type google.maps.Map*/(null))
  const { theme } = useContext(ThemeContext);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  const handlePositionCenter = () => {
    map.panTo(center)
  }

  return (
    <MapWrapper>
      <Search handlePositionCenter={handlePositionCenter} />
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          mapTypeControl: false,
          styles: theme.mapStyle.styles,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
      </GoogleMap>
    </MapWrapper>
  );
}