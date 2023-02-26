import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from "prop-types";

const Container = styled.div`
  color: ${(props) => props.$color.font_secondary_blk};
  padding: 3px 0 0 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 10px;
`;

const Box = styled.div`
  position: relative;
  width: 70px;
  height: 50px;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: end;
  & + & {
    margin-left: 6px;
  }
`;

const Title = styled.p`
  color: ${(props) => props.$color.font_secondary_blk};
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 3px;
`;

const H1 = styled.h1`
  font-size: 24px;
  color: ${(props) => props.$color.font_active};
`;

export default function Tooltip({hoverMarker: { availablecar, hasChargingStation }}) {
  const { theme } = useContext(ThemeContext);
  const fontAwesomeStyle = {
    width: "24px",
    height: "24px",
    color: theme.font_active,
  };

  return (
    <Container $color={theme}>
      <Wrapper>
        <Box style={{ background: "#04AA6D" }}>
          <Title $color={theme}>空車位</Title>
          <H1 $color={theme}>{availablecar}</H1>
        </Box>
        {hasChargingStation === "有" && (
          <Box style={{ background: "#E67E22" }}>
            <Title $color={theme}>提供充電樁</Title>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-check"
              style={fontAwesomeStyle}
            />
          </Box>
        )}

        {hasChargingStation === "無" && (
          <Box style={{ background: "#AFABAB" }}>
            <Title $color={theme}>提供充電樁</Title>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-xmark"
              style={fontAwesomeStyle}
            />
          </Box>
        )}
      </Wrapper>

      <P>*點擊標記看詳細資訊</P>
    </Container>
  );
}
Tooltip.propTypes = {
  hoverMarker: PropTypes.object,
  availablecar: PropTypes.number,
  hasChargingStation: PropTypes.string,
};
