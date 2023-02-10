import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../constants/style";
import { MEDIA_QUERY } from "../../constants/style";

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
    width: 90%;
    margin: 0 auto;
    height: 1.5px;
    background: ${(props) => props.$color.border_main};
    border: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 3vw;
  ${MEDIA_QUERY} {
    width: 90%;
    margin: 5px auto;
    // position: relative;
    // justify-content: center;
  }
`;

const FooterTitle = styled.p``;

const LinkWrapper = styled.div`
  ${MEDIA_QUERY} {
    // position: absolute;
    // top: 0;
    // right: 0;
    display: flex;
  }
`;

const LinkItem = styled(Link)`
  color: ${(props) => props.$color.font_main};
  text-decoration: none;
  & + & {
    margin-left: 8px;
  }
  ${MEDIA_QUERY} {
    display: flex;
    align-items: center;
    // border: 1px solid green;
    & + & {
      &::before {
        height: 90%;
        width: 1.5px;
        content: "";
        background: ${(props) => props.$color.font_main};
      }
    }
  }
`;

const LinkTitle = styled.p`
  display: none;
  ${MEDIA_QUERY} {
    display: block;
    margin-left: 8px;
    padding-right: 5px;
    // border: 1px solid red;
  }
`;

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <Hr $color={theme} />
      <Wrapper>
        <FooterTitle>
          Website are designed and built by Bun &copy; 2023.
        </FooterTitle>
        <LinkWrapper>
          <LinkItem
            to="https://medium.com/@bun.coding"
            $color={theme}
            target="_blank"
          >
            <LinkTitle>Medium</LinkTitle>
            <FontAwesomeIcon icon="fa-brands fa-medium" />
          </LinkItem>
          <LinkItem
            to="https://github.com/thisIsBun"
            $color={theme}
            target="_blank"
          >
            <LinkTitle>Github</LinkTitle>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </LinkItem>
          <LinkItem
            to="https://www.linkedin.com/in/shu-yin-chen-2a4411138/"
            $color={theme}
            target="_blank"
          >
            <LinkTitle>Linkedin</LinkTitle>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </LinkItem>
          <LinkItem
            to="https://www.cakeresume.com/shu-yin"
            $color={theme}
            target="_blank"
          >
            <LinkTitle>Resume</LinkTitle>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </LinkItem>
        </LinkWrapper>
      </Wrapper>
    </FooterContainer>
  );
}
