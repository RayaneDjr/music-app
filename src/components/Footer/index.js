import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>The footer</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px;
`;
