import { API_KEY } from "../../constants/.env.local";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  ${MEDIA_QUERY} {
    height: 80vh;
  }
`;

const center = {
  lat: 25.040348,
  lng: 121.533095,
};

export default function Map() {
  const { theme } = useContext(ThemeContext);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: ["places"]
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <MapWrapper>
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          mapTypeControl: false,
          styles: theme.mapStyle.styles,
          fullscreenControl: false,
        }}
      >
        <Marker position={center}/>
      </GoogleMap>
    </MapWrapper>
  );
}
