import styled from "styled-components";
import React, { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Select: VFC<Props> = (props) => {
  const { children } = props;
  return <SSelect>{children}</SSelect>;
};
export const SSelect = styled.select`
  max-width: 340px;
  width: 100%;
  height: 40px;
  margin: 5vh 0;
  text-align: center;
`;
