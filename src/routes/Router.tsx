import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimaryConfirm, SecondaryConfirm } from "../components/pages/Confirms";
import { Page404 } from "../components/pages/Page404";
import { PrimaryPeriod, SecondaryPeriod } from "../components/pages/Periods";
import { PrimaryTheme, SecondaryTheme } from "../components/pages/Themes";
import { DefaultLayout } from "../components/templates/DefaultLayout";
export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout
        PrimaryContent={
          <Routes>
            <Route path="/" element={<PrimaryTheme />} />
            <Route path="period" element={<PrimaryPeriod />} />
            <Route path="confirm" element={<PrimaryConfirm />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        }
        SecondaryContent={
          <Routes>
            <Route path="/" element={<SecondaryTheme />} />
            <Route path="period" element={<SecondaryPeriod />} />
            <Route path="confirm" element={<SecondaryConfirm />} />
          </Routes>
        }
      ></DefaultLayout>
    </BrowserRouter>
  );
};
