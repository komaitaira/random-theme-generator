import React, { ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
};

export const BackButton: VFC<Props> = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #fff;
  color: #f6aa64;
  margin-right: 1vw;
  margin-left: 2vw;
`;
