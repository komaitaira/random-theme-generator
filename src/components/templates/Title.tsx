import React, { VFC } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../molecules/wrapper/FlexWrapper";
import { Wrapper } from "../molecules/wrapper/Wrapper";

export const Title: VFC = () => {
  return (
    <FlexWrapper>
      <Wrapper>
        <STitle>Random Theme Generator</STitle>
        <SSubTitle>for photographer</SSubTitle>
      </Wrapper>
    </FlexWrapper>
  );
};

const STitle = styled.h1`
  color: #fff;
`;

const SSubTitle = styled.h2`
  color: #fff;
`;
