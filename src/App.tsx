import React from "react";
import { Wave } from "./components/atoms/wave/wave";
import { Content } from "./components/molecules/block/Content";
import { InnerMain } from "./components/molecules/block/InnerMain";
import { Main } from "./components/molecules/block/Main";
import { Buttons } from "./components/templates/Buttons";
import { Title } from "./components/templates/Title";

export function App() {
  return (
    <>
      <Main>
        <InnerMain>
          <Title />
        </InnerMain>
        <Wave />
      </Main>
      <Content>
        <Buttons />
      </Content>
    </>
  );
}
