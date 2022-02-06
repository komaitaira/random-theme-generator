import React, { ReactNode, VFC } from "react";
import styled from "styled-components";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";

type Props = {
  children?: ReactNode;
};

export const Operation: VFC<Props> = (props) => {
  const { children } = props;
  console.log("Operationコンポーネント");
  return <ExtendFlexWrapper>{children}</ExtendFlexWrapper>;
};

const ExtendFlexWrapper = styled(SFlexWrapper)`
  height: 10vh;
  background-color: #fff;
  bottom: 0;
  position: absolute;
  width: 100%;
`;
