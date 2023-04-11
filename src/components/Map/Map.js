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
import Modal from "../Modal";
import Locator from "../Locator";
import { gtag } from "../../constants/utils";
import beachflag from "../../assets/beachflag.png"

export default function Map() {
  const center = useMemo(() => ({ lat: 25.0336752, lng: 121.5648831 }), []);
  const [location, setLocation] = useState(center);
  const { theme } = useContext(ThemeContext);
  const { sortData } = useContext(ParkContext);
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
  const [isLoading, setIsLoading] = useState(false);
  const [isDeviceLocate, setIsDeviceLocate] = useState(false);

  const handleLocator = () => {
    setIsLoading(true);
    gtag("event", "locate_by_device", {
      content_type: "locateByDevice",
    });
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      setLocation({ lat: latitude, lng: longitude });
      mapRef.current.panTo({ lat: latitude, lng: longitude });
      setIsLoading(false);
      setIsDeviceLocate(true);
    });
  };

  return (
    <div className="map-container">
      <div className="combobox-wrapper">
        <Search
          setLocation={(location) => {
            setLocation(location);
            mapRef.current.panTo(location);
            setIsDeviceLocate(false);
          }}
        />
        <Locator
          handleLocator={handleLocator}
          isLoading={isLoading}
          isDeviceLocate={isDeviceLocate}
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
                        icon={beachflag}
                        onMouseOut={() => setHoverMarker(null)}
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
                pixelOffset: new window.google.maps.Size(0, -35),
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
              <Modal clickMarker={clickMarker} />
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
