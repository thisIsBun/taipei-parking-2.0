import { useState, useMemo, useCallback, useRef, useContext } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ParkContext } from "../../contexts/ParkContext";
import { circleOptions } from "../../constants/utils";
import Search from "../Search/";
import Tooltip from "../Tooltip/Tooltip";
import Modal from "../Modal"

export default function Map() {
  const [location, setLocation] = useState();
  const { theme } = useContext(ThemeContext);
  const sortData = useContext(ParkContext);
  const center = useMemo(() => ({ lat: 25.0336752, lng: 121.5648831 }), []);
  const options = useMemo(
    () => ({
      streetViewControl: false,
      styles: theme.mapStyle.styles,
      mapTypeControl: false,
      fullscreenControl: false,
    }),
    [theme.mapStyle.styles]
  );
  const mapRef = useRef();
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const [hoverMarker, setHoverMarker] = useState("");
  const [clickMarker, setClickMarker] = useState("");

  return (
    <div className="map-container">
      <div className="combobox-wrapper">
        <Search
          setLocation={(location) => {
            setLocation(location);
            mapRef.current.panTo(location);
          }}
        />
      </div>
      <div>
        <GoogleMap
          center={center}
          zoom={16}
          mapContainerClassName="map-wrapper"
          options={options}
          onLoad={onLoad}
        >
          {location && (
            <>
              <Marker position={location} />
              <MarkerClusterer>
                {(clusterer) =>
                  sortData.map((park) => {
                    return (
                      <Marker
                        position={{ lat: park.lat, lng: park.lng }}
                        key={park.id}
                        clusterer={clusterer}
                        icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                        onMouseOver={() => setHoverMarker(park)}
                        onClick={() => {
                          setClickMarker(park);
                          setHoverMarker("");
                        }}
                      />
                    );
                  })
                }
              </MarkerClusterer>
              <Circle
                center={location}
                radius={100}
                options={circleOptions.closeOptions}
              />
              <Circle
                center={location}
                radius={250}
                options={circleOptions.middleOptions}
              />
              <Circle
                center={location}
                radius={500}
                options={circleOptions.farOptions}
              />
            </>
          )}
          {hoverMarker && (
            <InfoWindow
              position={{ lat: hoverMarker.lat, lng: hoverMarker.lng }}
              options={{
                pixelOffset: new window.google.maps.Size(0, -30),
              }}
              onCloseClick={() => setHoverMarker("")}
            >
              <Tooltip hoverMarker={hoverMarker} />
            </InfoWindow>
          )}
          {clickMarker && (
            <InfoWindow
              position={{ lat: clickMarker.lat, lng: clickMarker.lng }}
              options={{
                pixelOffset: new window.google.maps.Size(0, -20),
              }}
              onCloseClick={() => setClickMarker("")}
            >
              <Modal clickMarker={clickMarker} location={location} />
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
