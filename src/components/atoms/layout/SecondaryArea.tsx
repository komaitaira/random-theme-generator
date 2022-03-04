import React, { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};
// eslint-disable-next-line react/display-name
export const SecondaryArea: VFC<Props> = memo((props) => {
  const { children } = props;
  return <SSecondaryArea>{children}</SSecondaryArea>;
});

const SSecondaryArea = styled.div`
  background-color: #ffe4c5;
  height: 40%;
  position: relative;
`;
