import React, { memo, MouseEventHandler, ReactNode, VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../../atoms/button/BaseButton";

type Props = {
  children: ReactNode;
  onClickButton?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

// eslint-disable-next-line react/display-name
export const WhiteButton: VFC<Props> = memo((props) => {
  const { children, onClickButton, disabled } = props;
  return (
    <SButton onClick={onClickButton} disabled={disabled}>
      {children}
    </SButton>
  );
});

const SButton = styled(BaseButton)`
  background-color: #fff;
  color: #f6aa64;
  border: 1px solid #f6aa64;
  margin-right: 1vw;
  margin-left: 2vw;
`;
