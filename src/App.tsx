import React from "react";
import { BackButton } from "./components/atoms/button/BackButton";
import { NextButton } from "./components/atoms/button/NextButton";
import { Wave } from "./components/atoms/wave/wave";
import { Content } from "./components/molecules/block/Content";
import { InnerMain } from "./components/molecules/block/InnerMain";
import { Main } from "./components/molecules/block/Main";
import { FlexWrapper } from "./components/molecules/wrapper/FlexWrapper";
import { Title } from "./components/templates/Title";

export function App() {
  return (
    <>
      <Main>
        <InnerMain>
          <FlexWrapper>
            <Title />
          </FlexWrapper>
        </InnerMain>
        <Wave />
      </Main>
      <Content>
        <FlexWrapper>
          <BackButton>BACK</BackButton>
          <NextButton>NEXT</NextButton>
        </FlexWrapper>
      </Content>
    </>
  );
}
