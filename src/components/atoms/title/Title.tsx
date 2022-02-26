import styled from "styled-components";
import React, { VFC } from "react";
import { Wrapper } from "../wrapper/Wrapper";

export const Title: VFC = () => {
  console.log("Titleコンポーネント");
  return (
    <Wrapper>
      <STitle>Random Theme Generator</STitle>
      <SSubTitle>for photographer</SSubTitle>
    </Wrapper>
  );
};

const STitle = styled.h1`
  color: #fff;
`;

const SSubTitle = styled.h2`
  color: #fff;
`;
