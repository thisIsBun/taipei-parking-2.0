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
  ${MEDIA_QUERY} {
    font-size: 13px;
  }
`;

const Hr = styled.hr`
  display: none;
  ${MEDIA_QUERY} {
    display: block;
    width: 98%;
    margin: 0 auto;
    height: 1.5px;
    background: ${(props) => props.$color.border_main};
    border: none;
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

const Bun = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color.font_main};
  background: ${props => props.$color.background_hover};
  border-radius: 6px;
  padding: 3px 8px;
`;

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const { updateTime } = useContext(ParkContext);
  return (
    <FooterContainer>
      <Hr $color={theme} />
      <Wrapper>
        <LeftTitle>
          Website are designed and built by{" "}
          <Bun
            to="https://www.linkedin.com/in/shu-yin-chen-2a4411138/"
            target="_blank"
            $color={theme}
          >
            Bun
          </Bun>{" "}
          &copy; 2023.
        </LeftTitle>
        <RightTitle>資料更新時間：{updateTime}</RightTitle>
      </Wrapper>
    </FooterContainer>
  );
}
