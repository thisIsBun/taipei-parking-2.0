import API_KEY from "./.apiKey";
import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import PropTypes from "prop-types"

const ParkingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  border: 1px solid red;
`;

const Info = styled.div`
  grid-column: 1/2;
  border: 1px solid red;
`;

const MapWrapper = styled.div`
  padding: 2px;
  grid-column: 2/3;
  border: 1px solid #e7e6e6;
`;

function AnyReactComponent({text}) {
  return <div>{text}</div>;
}

AnyReactComponent.propTypes = {
  text: PropTypes.string
}

export default function Map() {
  const defaultProps = {
    center: {
      lat: 25.040348,
      lng: 121.533095,
    },
    zoom: 16,
  };

  return (
    <ParkingContainer>
      <Info />
      <MapWrapper>
        <div style={{ height: "85vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={25.040348}
              lng={121.533095}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </MapWrapper>
    </ParkingContainer>
  );
}