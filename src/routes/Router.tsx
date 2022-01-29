import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { Period } from "../components/pages/Period";
import { Theme } from "../components/pages/Theme";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Theme />} />
        <Route path="period" element={<Period />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
