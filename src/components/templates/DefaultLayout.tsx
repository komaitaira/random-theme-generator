import React, { ReactNode, VFC } from "react";
import { Content } from "../atoms/layout/Content";
import { InnerMain } from "../atoms/layout/InnerMain";
import { Main } from "../atoms/layout/Main";
import { Wave } from "../atoms/svg/Wave";
import { MainContainer } from "../molecules/MainContainer";

type Props = {
  innerMainChildren?: ReactNode;
  contentChildren?: ReactNode;
};

export const DefaultLayout: VFC<Props> = (props) => {
  const { innerMainChildren, contentChildren } = props;
  return (
    <>
      <Main>
        <InnerMain>
          <MainContainer>{innerMainChildren}</MainContainer>
        </InnerMain>
        <Wave />
      </Main>
      <Content>{contentChildren}</Content>
    </>
  );
};
