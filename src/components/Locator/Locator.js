import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types"
import Loader from "../Loader";

const Container = styled.div`
  border-radius: 7px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  background: ${(props) => props.$color.background_searchbox};
  cursor: pointer;
`;

export default function Locator({ handleLocator, isLoading, isDeviceLocate }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container $color={theme} onClick={handleLocator}>
      {!isLoading && (
        <FontAwesomeIcon
          icon="fa-solid fa-crosshairs"
          style={{ width: "20px", height: "20px", color: `${isDeviceLocate ? "#04AA6D" : ""}` }}
        />
      )}
      {isLoading && (
        <Loader borderColor="#04AA6D" borderTopColor="rgba(0, 0, 0, 0)" />
      )}
    </Container>
  );
}
Locator.propTypes = {
  handleLocator: PropTypes.func,
  isLoading: PropTypes.bool,
  isDeviceLocate: PropTypes.bool
};