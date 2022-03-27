import React, { ReactNode, VFC } from "react";
import styled from "styled-components";
import { SFlexWrapper } from "../atoms/wrapper/FlexWrapper";

type Props = {
  children?: ReactNode;
};

export const Operation: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <ExtendFlexWrapper>
      {children}
      <SSmall>
        © 2022{" "}
        <SA
          href="https://twitter.com/iburasann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taira Komai
        </SA>
      </SSmall>
    </ExtendFlexWrapper>
  );
};

const ExtendFlexWrapper = styled(SFlexWrapper)`
  height: 30%;
  background-color: #fff;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

const SA = styled.a`
  text-decoration: none;
  color: #000;
`;

const SSmall = styled.small`
  position: absolute;
  right: 2vw;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
