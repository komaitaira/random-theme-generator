import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimaryConfirm } from "../components/pages/Confirms";
import { Page404 } from "../components/pages/Page404";
import { PrimaryPeriod } from "../components/pages/Periods";
import { PrimaryResult } from "../components/pages/Result";
import { PrimaryTheme } from "../components/pages/Themes";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { FormLayout } from "../components/templates/FormLayout";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route path="/" element={<PrimaryTheme />}></Route>
          <Route path="period" element={<PrimaryPeriod />}></Route>
          <Route path="confirm" element={<PrimaryConfirm />}></Route>
        </Route>
        <Route path="/*" element={<DefaultLayout />}>
          <Route path="result" element={<PrimaryResult />}></Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
