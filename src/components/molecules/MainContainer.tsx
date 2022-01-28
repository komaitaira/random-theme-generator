import React, { ReactNode, VFC } from "react";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Wrapper } from "../atoms/wrapper/Wrapper";
import { Title } from "../atoms/title/Title";

type Props = {
  children: ReactNode;
};

export const MainContainer: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <FlexWrapper>
      <Wrapper>
        <Title />
        {children}
      </Wrapper>
    </FlexWrapper>
  );
};
