import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Wrapper: VFC<Props> = (props) => {
  const { children } = props;
  return <SWrapper>{children}</SWrapper>;
};

const SWrapper = styled.div`
  padding: 5px;
`;
