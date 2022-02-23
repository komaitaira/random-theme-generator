import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimaryConfirm, SecondaryConfirm } from "../components/pages/Confirms";
import { Page404 } from "../components/pages/Page404";
import { PrimaryPeriod, SecondaryPeriod } from "../components/pages/Periods";
import { PrimaryResult, SecondaryResult } from "../components/pages/Result";
import { PrimaryTheme, SecondaryTheme } from "../components/pages/Themes";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { FormLayout } from "../components/templates/FormLayout";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FormLayout
              PrimaryContent={<PrimaryTheme />}
              SecondaryContent={<SecondaryTheme />}
            ></FormLayout>
          }
        />
        <Route
          path="period"
          element={
            <FormLayout
              PrimaryContent={<PrimaryPeriod />}
              SecondaryContent={<SecondaryPeriod />}
            ></FormLayout>
          }
        />
        <Route
          path="confirm"
          element={
            <FormLayout
              PrimaryContent={<PrimaryConfirm />}
              SecondaryContent={<SecondaryConfirm />}
            ></FormLayout>
          }
        />
        <Route
          path="result"
          element={
            <FormLayout
              PrimaryContent={<PrimaryResult />}
              SecondaryContent={<SecondaryResult />}
            ></FormLayout>
          }
        />
        <Route
          path="*"
          element={<DefaultLayout PrimaryContent={<Page404 />}></DefaultLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
};
