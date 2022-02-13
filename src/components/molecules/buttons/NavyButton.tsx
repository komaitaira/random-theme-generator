import React, { MouseEventHandler, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
};

export const NavyButton: VFC<Props> = (props) => {
  const { children, onClickButton } = props;
  return <SButton onClick={onClickButton}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #092856;
  color: #f6aa64;
  margin-left: 1vw;
  margin-right: 2vw;
`;
