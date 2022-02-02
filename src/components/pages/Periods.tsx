import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { PeriodSelect } from "../atoms/selectbox/PeriodSelect";
import { ContentContainer } from "../molecules/ContentContainer";
import { Operation } from "../organisms/Operation";
import styled from "styled-components";
import { SWrapper } from "../atoms/wrapper/Wrapper";

export const Period: VFC = () => {
  console.log("Periodコンポーネント");
  return (
    <>
      <Title />
      <PeriodSelect />
    </>
  );
};

export const PeriodContentChildren: VFC = () => {
  console.log("PeriodContentChildrenコンポーネント");
  return (
    <>
      <ExtendWrapper>
        <SDiv>
          <SDescription>撮影期限を決めましょう</SDescription>
          <SProgress>2/3</SProgress>
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
