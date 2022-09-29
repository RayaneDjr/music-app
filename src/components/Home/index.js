import React from "react";
import styled from "styled-components";
import GridButton from "./GridButton";

const list = ["el1", "el2", "el3", "el4"];

const Home = () => {
  return (
    <Wrapper>
      <Grid>
        {list.map((el) => {
          return <GridButton key={el}>{el}</GridButton>;
        })}
      </Grid>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  border: solid 1px;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  padding: 24px;
  margin: auto;
  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;
