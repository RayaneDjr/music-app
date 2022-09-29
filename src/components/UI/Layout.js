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
        <Header isLight={isLight} handleToggleTheme={handleToggleTheme} />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 192px);
  width: 96%;
  max-width: 1240px;
  margin: auto;
  margin-top: 32px;
`;
