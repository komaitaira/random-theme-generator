import React, { ReactNode, VFC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
};

export const BackButton: VFC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  return <SButton onClick={() => navigate(-1)}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #fff;
  color: #f6aa64;
  margin-right: 1vw;
  margin-left: 2vw;
`;
