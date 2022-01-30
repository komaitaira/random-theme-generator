import styled from "styled-components";
import React, { VFC } from "react";

export const Title: VFC = () => {
  console.log("call Title.");
  return (
    <>
      <STitle>Random Theme Generator</STitle>
      <SSubTitle>for photographer</SSubTitle>
    </>
  );
};

const STitle = styled.h1`
  color: #fff;
`;

const SSubTitle = styled.h2`
  color: #fff;
`;
