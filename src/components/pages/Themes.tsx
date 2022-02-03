import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { ThemeSelect } from "../atoms/selectbox/ThemeSelect";
import { Operation } from "../organisms/Operation";
import styled from "styled-components";
import { SWrapper } from "../atoms/wrapper/Wrapper";

export const PrimaryTheme: VFC = () => {
  console.log("PrimaryThemeコンポーネント");
  return (
    <>
      <Title />
      <ThemeSelect />
    </>
  );
};

export const SecondaryTheme: VFC = () => {
  console.log("SecondaryThemeコンポーネント");
  return (
    <>
      <ExtendWrapper>
        <SDiv>
          <SDescription>表示するテーマ数を決めましょう</SDescription>
          <SProgress>1/3</SProgress>
        </SDiv>
      </ExtendWrapper>
      <Operation />
    </>
  );
};

const ExtendWrapper = styled(SWrapper)`
  text-align: center;
  height: 23vh;
  position: relative;
`;

const SDiv = styled.div`
  position: absolute;
  padding: 2vw;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
`;

const SDescription = styled.h3`
  color: #13386f;
`;

const SProgress = styled.h4`
  color: #13386f;
`;
