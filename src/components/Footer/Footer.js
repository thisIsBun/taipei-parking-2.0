import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MEDIA_QUERY } from "../../constants/style";
import { ParkContext } from "../../contexts/ParkContext";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  width: 100%;
  font-size: 12px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  min-height: 4vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  background: ${(props) => props.$color.background_main};
  ${MEDIA_QUERY} {
    font-size: 13px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 3vw;
  ${MEDIA_QUERY} {
    justify-content: space-between;
    width: 98%;
    margin: 5px auto;
  }
`;

const LeftTitle = styled.p`
  display: none;
  ${MEDIA_QUERY} {
    display: block;
  }
`;

const RightTitle = styled.p``;

const GitHub = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color.font_main};
  background: ${props => props.$color.background_hover};
  border-radius: 6px;
  padding: 3px 8px;
  margin-left: 8px;
`;

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const { updateTime } = useContext(ParkContext);
  return (
    <FooterContainer $color={theme}>
      <Wrapper>
        <LeftTitle>
          Website are designed and built by Bun &copy; 2023.
          <GitHub
            to="https://github.com/thisIsBun/taipei-parking-2.0"
            target="_blank"
            $color={theme}
          >
            GitHub
          </GitHub>{" "}
        </LeftTitle>
        <RightTitle>資料更新時間：{updateTime}</RightTitle>
      </Wrapper>
    </FooterContainer>
  );
}
