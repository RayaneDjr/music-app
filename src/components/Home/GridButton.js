import React from "react";
import styled from "styled-components";

const GridButton = ({
  isPlayed = false,
  soundPlay,
  id,
  handleSampleChange,
}) => {
  return (
    <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
      <label onClick={(e) => e.stopPropagation()} htmlFor={id}>
        ♬
      </label>
      <input
        onClick={(e) => e.stopPropagation()}
        id={id}
        type='file'
        onChange={handleSampleChange}
      />
    </Wrapper>
  );
};

export default GridButton;

const Wrapper = styled.div`
  border-radius: 4px;
  background: radial-gradient(
    rgba(213, 236, 194, 1) 0%,
    rgba(152, 221, 202, 1) 100%
  );
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: radial-gradient(
      rgba(255, 170, 167, 1) ${(props) => (props.isPlayed ? "20%" : "0%")},
      rgba(255, 230, 213, 1) 100%
    );
    opacity: ${(props) => (props.isPlayed ? 1 : 0)};
    transition: linear 0.2s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:active::before {
    opacity: 1;
    background: radial-gradient(
      rgba(255, 170, 167, 1) 30%,
      rgba(255, 230, 213, 1) 100%
    );
  }
  & input {
    display: none;
  }
  & label {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 24px;
  }
`;
