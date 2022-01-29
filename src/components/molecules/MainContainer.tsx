import React, { ReactNode, VFC } from "react";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Wrapper } from "../atoms/wrapper/Wrapper";

type Props = {
  children: ReactNode;
};

export const MainContainer: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <FlexWrapper>
      <Wrapper>{children}</Wrapper>
    </FlexWrapper>
  );
};
