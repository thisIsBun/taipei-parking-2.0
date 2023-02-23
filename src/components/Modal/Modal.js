import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MEDIA_QUERY } from "../../constants/style";

const Container = styled.div`
  margin: 6px 0;
  color: #117577;
  width: 280px;
  ${MEDIA_QUERY} {
    width: 360px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(17, 117, 119, 0.5);
  padding-bottom: 6px;
`;

const H1 = styled.h1`
  font-size: 14px;
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionWrapper = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #117577;
  cursor: pointer;
  color: #117577;
  text-decoration: none;
  & + & {
    margin-left: 8px;
  }
  &:hover {
    background: rgba(17, 117, 119, 0.15);
  }
  ${MEDIA_QUERY} {
    width: auto;
    padding: 4px 12px;
  }
`;

const ActionName = styled.span`
  display: none;
  ${MEDIA_QUERY} {
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-right: 4px;
  }
`;

const Body = styled.div`
  margin-top: 12px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
`;

const Title = styled.h3`
  font-size: 12px;
  margin-bottom: 2px;
`;

const Description = styled.p`
  color: #112e31;
  font-size: 11px;
`;

const OverflowDiv = styled.div`
  max-height: 70px;
  overflow-y: scroll;
`;

const iconSize = {
  width: "16px",
  height: "16px",
};

export default function Modal({
  clickMarker: { name, payex, area, address, serviceTime, lat, lng },
  location,
}) {
  return (
    <Container>
      <Header>
        <H1>{name}</H1>
        <Action>
          <ActionWrapper
            href={`https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${lat},${lng}&travelmode=driving`}
            target="_blank"
          >
            <ActionName>路線</ActionName>
            <FontAwesomeIcon icon="fa-regular fa-compass" style={iconSize} />
          </ActionWrapper>
          <ActionWrapper>
            <ActionName>儲存</ActionName>
            <FontAwesomeIcon icon="fa-regular fa-bookmark" style={iconSize} />
          </ActionWrapper>
        </Action>
      </Header>
      <Body>
        <Item>
          <Title>費率</Title>
          <OverflowDiv>
            <Description>{payex}</Description>
          </OverflowDiv>
        </Item>
        <Item>
          <Title>營業時間</Title>
          <Description>{serviceTime}</Description>
        </Item>
        <Item>
          <Title>地址</Title>
          <Description>{(area, address)}</Description>
        </Item>
      </Body>
    </Container>
  );
}
Modal.propTypes = {
  clickMarker: PropTypes.object,
  name: PropTypes.string,
  payex: PropTypes.string,
  area: PropTypes.string,
  address: PropTypes.string,
  serviceTime: PropTypes.string,
  location: PropTypes.string,
};
