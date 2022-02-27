import styled from "styled-components";
import React, { memo, VFC } from "react";
import { Wrapper } from "../wrapper/Wrapper";

// eslint-disable-next-line react/display-name
export const Title: VFC = memo(() => {
  console.log("Titleコンポーネント");
  return (
    <Wrapper>
      <STitle>Random Theme Generator</STitle>
      <SSubTitle>for photographer</SSubTitle>
    </Wrapper>
  );
});

const STitle = styled.h1`
  color: #fff;
`;

const SSubTitle = styled.h2`
  color: #fff;
`;
