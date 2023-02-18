import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types"

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
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.$color.background_searchbox};
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

export default function Search({ handlePositionCenter }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper $color={theme} style={{ width: "24vw" }}>
        <InputColumn $color={theme} />
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ width: "20px", height: "20px", marginLeft: "16px" }}
        />
      </Wrapper>
      <Wrapper
        $color={theme}
        style={{ width: "50px", marginLeft: "8px" }}
        onClick={handlePositionCenter}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-crosshairs"
          style={{ width: "20px", height: "20px" }}
        />
      </Wrapper>
    </Container>
  );
}
Search.propTypes = {
  handlePositionCenter: PropTypes.func
}