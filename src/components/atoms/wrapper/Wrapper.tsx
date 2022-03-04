import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const Wrapper: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SWrapper>{children}</SWrapper>;
});

export const SWrapper = styled.div``;
