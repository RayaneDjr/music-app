import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isLight, handleToggleTheme }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <h1>Our super music app</h1>
      <nav>
        <Link to='/'>
          <MenuEL isCurrentPage={location.pathname === "/"}>Home</MenuEL>
        </Link>
        <Link to='/about'>
          <MenuEL isCurrentPage={location.pathname === "/about"}>About</MenuEL>
        </Link>
      </nav>
      <button onClick={handleToggleTheme}>
        Switch to {isLight ? "dark" : "light"} theme
      </button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
  border-bottom: solid 1px;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:first-child {
    margin-right: 12px;
  }
`;

const MenuEL = styled.span`
  padding-bottom: 2px;
  border-bottom: solid 2px
    ${(props) => (props.isCurrentPage ? "" : "transparent")};
  &:hover {
    border-bottom: solid 2px;
  }
`;
