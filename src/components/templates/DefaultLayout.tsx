import React, { ReactNode, VFC } from "react";
import { Content } from "../atoms/layout/Content";
import { InnerMain } from "../atoms/layout/InnerMain";
import { Main } from "../atoms/layout/Main";
import { Wave } from "../atoms/svg/Wave";
import { Buttons } from "../molecules/Buttons";
import { ContentContainer } from "../molecules/ContentContainer";
import { MainContainer } from "../molecules/MainContainer";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Main>
        <InnerMain>
          <MainContainer>{children}</MainContainer>
        </InnerMain>
        <Wave />
      </Main>
      <Content>
        <ContentContainer />
        <Buttons />
      </Content>
    </>
  );
};
