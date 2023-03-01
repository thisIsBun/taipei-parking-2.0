import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ParkContext } from "../../contexts/ParkContext";
import Loader from "../Loader";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
  justify-items: center;
  color: ${(props) => props.$color.font_card_secondary};
`;

const CardWrapper = styled.div`
  border: 1.5px solid rgba(17, 117, 119, 0.5);
  border-radius: 8px;
  width: 320px;
  height: 370px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: ${(props) => props.$color.font_active};
`;

const Box = styled.div`
  flex-basis: 30%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 12px 0;
  border-radius: 6px;
  & + & {
    margin-left: 10px;
  }
`;

const BoxTitle = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  top: 2px;
  left: 3px;
  color: ${(props) => props.$color.font_secondary_blk};
`;

const H1 = styled.h1``;

const Body = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Div = styled.div`
  & + & {
    margin-top: 8px;
  }
  :last-child {
    display: flex;
    justify-content: end;
  }
`;

const InfoTitle = styled.h1`
  font-size: 20px;
  line-height: 1.1;
`;

const InfoDescrip = styled.p`
  font-size: 12px;
  margin-top: 2px;
  color: ${(props) => props.$color.font_card_main};
`;

const InfoSubTitle = styled.h2`
  font-size: 16px;
`;

const ActionWrapper = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color.font_card_secondary};
  border-radius: 50px;
  border: 1px solid #117577;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  & + & {
    margin-left: 12px;
  }
  &:hover {
    background: rgba(17, 117, 119, 0.25);
  }
`;

const ActionName = styled.span`
  margin-right: 8px;
`;

const headerIconStyle = {
  width: "28px",
  height: "28px",
};

const bodyIconStyle = {
  width: "18px",
  height: "18px",
};

const OverflowDiv = styled.div`
  max-height: 70px;
  overflow-y: scroll;
`;

export default function Card({ data, handleDeleteList }) {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(ParkContext);
  return (
    <Container $color={theme}>
      {data.map((item) => {
        return (
          <CardWrapper key={item.id}>
            <Header $color={theme}>
              <Box
                style={{
                  flexGrow: 1,
                  background:
                    item.availablecar !== "已滿" ? "#04AA6D" : "#AFABAB",
                }}
              >
                <BoxTitle $color={theme}>即時空位 / 總車位</BoxTitle>
                {isLoading && <Loader />}
                {!isLoading && (
                  <H1>
                    {item.availablecar} / {item.totalcar}
                  </H1>
                )}
              </Box>
              {item.hasChargingStation === "有" && (
                <Box style={{ background: "#E67E22" }}>
                  <BoxTitle $color={theme}>提供充電樁</BoxTitle>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-check"
                    style={headerIconStyle}
                  />
                </Box>
              )}
              {item.hasChargingStation === "無" && (
                <Box style={{ background: "#AFABAB" }}>
                  <BoxTitle $color={theme}>提供充電樁</BoxTitle>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-xmark"
                    style={headerIconStyle}
                  />
                </Box>
              )}
            </Header>
            <Body>
              <Div>
                <InfoTitle>{item.name}</InfoTitle>
                <InfoDescrip $color={theme}>{item.address}</InfoDescrip>
              </Div>
              <Div>
                <InfoSubTitle>區域</InfoSubTitle>
                <InfoDescrip $color={theme}>{item.area}</InfoDescrip>
              </Div>
              <Div>
                <InfoSubTitle>費率</InfoSubTitle>
                <OverflowDiv>
                  <InfoDescrip $color={theme}>{item.payex}</InfoDescrip>
                </OverflowDiv>
              </Div>
              <Div>
                <InfoSubTitle>營業時間</InfoSubTitle>
                <InfoDescrip $color={theme}>{item.opening}</InfoDescrip>
              </Div>
              <Div>
                <ActionWrapper
                  to={`https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}&travelmode=driving`}
                  target="_blank"
                  $color={theme}
                >
                  <ActionName>路線</ActionName>
                  <FontAwesomeIcon
                    icon="fa-regular fa-compass"
                    style={bodyIconStyle}
                  />
                </ActionWrapper>
                <ActionWrapper
                  to="#"
                  $color={theme}
                  onClick={() => handleDeleteList(item.id)}
                >
                  <ActionName>刪除</ActionName>
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash-can"
                    style={bodyIconStyle}
                  />
                </ActionWrapper>
              </Div>
            </Body>
          </CardWrapper>
        );
      })}
    </Container>
  );
}
Card.propTypes = {
  data: PropTypes.array,
  handleDeleteList: PropTypes.func,
};
