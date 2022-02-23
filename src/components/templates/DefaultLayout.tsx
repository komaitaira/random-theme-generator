import React, { ReactNode, VFC } from "react";
import { SecondaryArea } from "../atoms/layout/SecondaryArea";
import { InnerPrimaryArea } from "../atoms/layout/InnerPrimaryArea";
import { PrimaryArea } from "../atoms/layout/PrimaryArea";
import { Wave } from "../atoms/svg/Wave";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { SWrapper } from "../atoms/wrapper/Wrapper";
import styled from "styled-components";

type Props = {
  PrimaryContent?: ReactNode;
  SecondaryContent?: ReactNode;
};

export const DefaultLayout: VFC<Props> = (props) => {
  const { PrimaryContent, SecondaryContent } = props;
  console.log("DefaultLayoutコンポーネント");
  return (
    <>
      <PrimaryArea>
        <InnerPrimaryArea>
          <ExtendWrapper>{PrimaryContent}</ExtendWrapper>
        </InnerPrimaryArea>
        <Wave />
      </PrimaryArea>
      <SecondaryArea>{SecondaryContent}</SecondaryArea>
    </>
  );
};

const ExtendWrapper = styled(SWrapper)`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
