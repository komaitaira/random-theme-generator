import React, { VFC } from "react";
import { Title } from "../atoms/title/Title";
import { Operation } from "../organisms/Operation";
import { ContentContainer } from "../molecules/ContentContainer";
import { DefaultLayout } from "../templates/DefaultLayout";
import { PeriodSelect } from "../atoms/selectbox/PeriodSelect";

export const Period: VFC = () => {
  return (
    <DefaultLayout
      innerMainChildren={
        <>
          <Title />
          <PeriodSelect />
        </>
      }
      contentChildren={
        <>
          <ContentContainer />
          <Operation />
        </>
      }
    ></DefaultLayout>
  );
};
