import React from "react";
import { Wave } from "./components/atoms/svg/Wave";
import { Content } from "./components/templates/block/Content";
import { InnerMain } from "./components/templates/block/InnerMain";
import { Main } from "./components/templates/block/Main";
import { Buttons } from "./components/molecules/Buttons";
import { MainContainer } from "./components/molecules/MainContainer";
import { ContentContainer } from "./components/molecules/ContentContainer";

export function App() {
  return (
    <>
      <Main>
        <InnerMain>
          <MainContainer />
        </InnerMain>
        <Wave />
      </Main>
      <Content>
        <ContentContainer />
        <Buttons />
      </Content>
    </>
  );
}
