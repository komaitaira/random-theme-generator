import React, { VFC } from "react";
import { Operation } from "../organisms/Operation";
import { ContentContainer } from "../molecules/ContentContainer";

export const ContentChildren: VFC = () => {
  console.log("ContentChildrenコンポーネント");
  return (
    <>
      <ContentContainer />
      <Operation />
    </>
  );
};
