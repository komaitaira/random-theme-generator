import React, { ReactNode, VFC } from "react";
import { SecondaryArea } from "../atoms/layout/SecondaryArea";
import { InnerPrimaryArea } from "../atoms/layout/InnerPrimaryArea";
import { PrimaryArea } from "../atoms/layout/PrimaryArea";
import { Wave } from "../atoms/svg/Wave";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Wrapper } from "../atoms/wrapper/Wrapper";

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
          <FlexWrapper>
            <Wrapper>{PrimaryContent}</Wrapper>
          </FlexWrapper>
        </InnerPrimaryArea>
        <Wave />
      </PrimaryArea>
      <SecondaryArea>{SecondaryContent}</SecondaryArea>
    </>
  );
};
