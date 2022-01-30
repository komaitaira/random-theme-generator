import styled from "styled-components";
import React, { ReactEventHandler, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onChangeSelect: ReactEventHandler;
};

export const BaseSelect: VFC<Props> = (props) => {
  const { children, onChangeSelect } = props;
  return <SSelect onChange={onChangeSelect}>{children}</SSelect>;
};
export const SSelect = styled.select`
  max-width: 340px;
  width: 100%;
  height: 40px;
  margin: 5vh 0;
  text-align: center;
`;
