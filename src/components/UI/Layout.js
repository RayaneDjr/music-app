import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const handleToggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <Footer isLight={isLight} handleToggleTheme={handleToggleTheme} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 160px);
  width: 96%;
  max-width: 1240px;
  margin: auto;
  display: flex;
`;
