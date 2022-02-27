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
        <Route path="/form/*" element={<FormLayout />}>
          <Route path="theme" element={<PrimaryTheme />}></Route>
          <Route path="period" element={<PrimaryPeriod />}></Route>
          <Route path="confirm" element={<PrimaryConfirm />}></Route>
        </Route>
        <Route path="/default/*" element={<DefaultLayout />}>
          <Route path="result" element={<PrimaryResult />}></Route>
        </Route>
        <Route
          path="*"
          element={<DefaultLayout PrimaryContent={<Page404 />}></DefaultLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
};
