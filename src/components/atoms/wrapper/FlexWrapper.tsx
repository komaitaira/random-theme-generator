import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const FlexWrapper: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SFlexWrapper>{children}</SFlexWrapper>;
});

export const SFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
