import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gtag } from "../../constants/utils";

export default function Search({ setLocation }) {
  const { theme } = useContext(ThemeContext);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "tw" },
    },
  });

  const handleSelect = async (value) => {
    setValue(value, false);
    clearSuggestions();

    const results = await getGeocode({ address: value });
    const { lat, lng } = await getLatLng(results[0]);
    setLocation({ lat, lng });
  };

  return (
    <Combobox
      onSelect={handleSelect}
      className="combobox"
      style={{ background: `${theme.background_searchbox}` }}
    >
      <>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            gtag("event", "search", {
              search_term: value,
            });
          }}
          className="combobox-input"
          style={{
            background: `${theme.background_searchbox}`,
            color: `${theme.font_main}`,
          }}
          placeholder="輸入台北市目的地"
          disabled={!ready}
        />
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ width: "22px", height: "22px", margin: "0 16px" }}
          cursor="pointer"
          onClick={() => setValue("")}
        />
      </>
      <ComboboxPopover
        className="combobox-popover"
        style={{
          background: `${theme.background_searchbox}`,
          color: `${theme.font_main}`,
          left: "2vw",
          width: `calc(96vw - 56px)`,
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.22)",
          WebkitBoxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.22)",
          MozBoxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.22)",
          borderRadius: "0 0 7px 7px",
          borderWidth: "0",
          padding: status ? "12px 0" : "0",
        }}
      >
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
Search.propTypes = {
  setLocation: PropTypes.func,
};
