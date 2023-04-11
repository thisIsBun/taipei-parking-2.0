import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MEDIA_QUERY } from "../../constants/style";
import { useState, useEffect } from "react";
import {
  writeSaveListLocalStorage,
  getSaveListLocalStorage,
} from "../../constants/utils";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 6px 0;
  color: #117577;
  width: 256px;
  padding-right: 6px;
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
  line-height: 1.1;
  margin-right: 10px;
`;

const Action = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80px;
  ${MEDIA_QUERY} {
    margin-right: 0;
    min-width: 160px;
  }
`;

const ActionWrapper = styled(Link)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #117577;
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

export default function Modal({ clickMarker }) {
  const { name, payex, area, address, opening, lat, lng, id } = clickMarker;
  const [saveList, setSaveList] = useState(
    () => getSaveListLocalStorage() || []
  );

  const [isSaved, setIsSaved] = useState(() => {
    return saveList.some((list) => list.id === id);
  });

  useEffect(() => {
    writeSaveListLocalStorage(saveList);
    setIsSaved(saveList.some((list) => list.id === id));
  }, [saveList, setIsSaved, id]);

  const handleSaveList = () => {
    if (isSaved) {
      setSaveList(saveList.filter((item) => item.id !== id));
    } else {
      setSaveList([clickMarker, ...saveList]);
    }
  };

  return (
    <Container>
      <Header>
        <H1>{name}</H1>
        <Action>
          <ActionWrapper
            to={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`}
            target="_blank"
          >
            <ActionName>路線</ActionName>
            <FontAwesomeIcon icon="fa-regular fa-compass" style={iconSize} />
          </ActionWrapper>
          <ActionWrapper onClick={handleSaveList} to="#">
            <ActionName>儲存</ActionName>
            {isSaved && (
              <FontAwesomeIcon icon="fa-solid fa-bookmark" style={iconSize} />
            )}
            {!isSaved && (
              <FontAwesomeIcon icon="fa-regular fa-bookmark" style={iconSize} />
            )}
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
          <Description>{opening}</Description>
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
};
