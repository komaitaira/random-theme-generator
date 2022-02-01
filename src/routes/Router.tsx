import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Confirm } from "../components/pages/Confirm";
import { ContentChildren } from "../components/templates/ContentChildren";
import { Page404 } from "../components/pages/Page404";
import { Period } from "../components/pages/Period";
import { Theme } from "../components/pages/Theme";
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
            <Route path="/" element={<ContentChildren />} />
            <Route path="period" element={<ContentChildren />} />
            <Route path="confirm" element={<ContentChildren />} />
          </Routes>
        }
      ></DefaultLayout>
    </BrowserRouter>
  );
};
