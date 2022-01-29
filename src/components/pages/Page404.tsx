import React, { VFC } from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Page404: VFC = () => {
  return (
    <DefaultLayout>
      <SMessage>
        404 Not Found.
        <br />
        ページが見つかりませんでした。
      </SMessage>
    </DefaultLayout>
  );
};

const SMessage = styled.p`
  color: #fff;
`;
