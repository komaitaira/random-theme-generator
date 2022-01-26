import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Content: VFC<Props> = (props) => {
  const { children } = props;
  return <SContent>{children}</SContent>;
};

const SContent = styled.div`
  background-color: #ffe4c5;
  height: 30vh;
`;
