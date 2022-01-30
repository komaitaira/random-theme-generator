import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Buttons } from "../organisms/Operation";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";

export const Confirm: VFC = () => {
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <Title />
          <ExtendWrapper>
            <SP>表示テーマ数: 10</SP>
            <SP>撮影期限: 1ヶ月以内</SP>
          </ExtendWrapper>
        </>
      }
      contentChildren={
        <>
          <ContentContainer />
          <Buttons />
        </>
      }
    ></DefaultLayout>
  );
};

const ExtendWrapper = styled(SWrapper)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SP = styled.p`
  color: #fff;
`;
