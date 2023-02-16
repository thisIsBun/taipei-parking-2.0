import { API_KEY } from "../../constants/.env.local";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  ${MEDIA_QUERY} {
    height: 80vh;
  }
`;

function AnyReactComponent({ text }) {
  return <div>{text}</div>;
}

AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  center: {
    lat: 25.040348,
    lng: 121.533095,
  },
  zoom: 16,
};

export default function Map() {
  const {theme} = useContext(ThemeContext)

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={theme.mapStyle}
      >
        <AnyReactComponent lat={25.040348} lng={121.533095} text="My Marker" />
      </GoogleMapReact>
    </MapWrapper>
  );
}
