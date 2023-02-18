import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";

const Container = styled.div`
  position: fixed;
  top: calc(12vh + 8px);
  left: calc(1% + 8px);
  z-index: 10;
  display: flex;
`;

const Wrapper = styled.div`
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  border-radius: 7px;
  height: 50px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.$color.background_searchbox};
  & > div {
    width: 100%;
  }
`;
const InputColumn = styled.input`
  width: 100%;
  border: 0px;
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  background: ${(props) => props.$color.background_searchbox};
  color: ${(props) => props.$color.font_main};
  &:focus {
    outline: none;
  }
`;

export default function Search({
  handlePositionCenter,
  Autocomplete,
  isLoading,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper $color={theme} style={{ width: "24vw" }}>
        <Autocomplete>
          <InputColumn type="text" $color={theme} placeholder="輸入位置" />
        </Autocomplete>
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ width: "20px", height: "20px", marginLeft: "16px" }}
          cursor="pointer"
        />
      </Wrapper>
      <Wrapper
        $color={theme}
        style={{
          width: "50px",
          marginLeft: "8px",
          cursor: "pointer",
          justifyContent: "center",
        }}
        onClick={handlePositionCenter}
      >
        {isLoading && (
          <Loader borderColor="#04AA6D" borderTopColor="rgba(0, 0, 0, 0)" />
        )}
        {!isLoading && (
          <FontAwesomeIcon
            icon="fa-solid fa-crosshairs"
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </Wrapper>
    </Container>
  );
}
Search.propTypes = {
  handlePositionCenter: PropTypes.func,
  Autocomplete: PropTypes.elementType,
  isLoading: PropTypes.bool,
};