import React, { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

export const SecondaryArea: VFC<Props> = (props) => {
  const { children } = props;
  console.log("SecondaryAreaコンポーネント");
  return <SSecondaryArea>{children}</SSecondaryArea>;
};

const SSecondaryArea = styled.div`
  background-color: #ffe4c5;
  height: 40%;
  position: relative;
`;
