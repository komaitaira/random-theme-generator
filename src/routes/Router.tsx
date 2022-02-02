import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Confirm, ConfirmContentChildren } from "../components/pages/Confirms";
import { Page404 } from "../components/pages/Page404";
import { Period, PeriodContentChildren } from "../components/pages/Periods";
import { Theme, ThemeContentChildren } from "../components/pages/Themes";
import { DefaultLayout } from "../components/templates/DefaultLayout";
export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout
        innerMainChildren={
          <Routes>
            <Route path="/" element={<Theme />} />
            <Route path="period" element={<Period />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        }
        contentChildren={
          <Routes>
            <Route path="/" element={<ThemeContentChildren />} />
            <Route path="period" element={<PeriodContentChildren />} />
            <Route path="confirm" element={<ConfirmContentChildren />} />
          </Routes>
        }
      ></DefaultLayout>
    </BrowserRouter>
  );
};
