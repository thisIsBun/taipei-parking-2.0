import API_KEY from "./.apiKey";
import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`;

function AnyReactComponent({ text }) {
  return <div>{text}</div>;
}

AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

export default function Map() {
  const defaultProps = {
    center: {
      lat: 25.040348,
      lng: 121.533095,
    },
    zoom: 16,
  };

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={25.040348} lng={121.533095} text="My Marker" />
      </GoogleMapReact>
    </MapWrapper>
  );
}