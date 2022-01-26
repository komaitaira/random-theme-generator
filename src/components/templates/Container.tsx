import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const Container: VFC<Props> = (props) => {
  const { children } = props;
  return <SContainer>{children}</SContainer>;
};

const SContainer = styled.div`
  /* display: grid;
  grid-template-rows: 30% 25% 25% 20%;
  grid-template-columns: auto auto; */
`;
