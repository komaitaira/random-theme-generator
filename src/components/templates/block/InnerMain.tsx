import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const InnerMain: VFC<Props> = (props) => {
  const { children } = props;
  return <SInnerMain>{children}</SInnerMain>;
};

const SInnerMain = styled.div`
  height: 60vh;
`;
