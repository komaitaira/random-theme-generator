import React, { VFC } from "react";
import { Select } from "../atoms/selectbox/Select";
import { FlexWrapper } from "../atoms/wrapper/FlexWrapper";
import { Wrapper } from "../atoms/wrapper/Wrapper";
import { Title } from "../atoms/title/Title";

export const MainContainer: VFC = () => {
  return (
    <FlexWrapper>
      <Wrapper>
        <Title />
        <Select>
          <option>選択してください</option>
        </Select>
      </Wrapper>
    </FlexWrapper>
  );
};
