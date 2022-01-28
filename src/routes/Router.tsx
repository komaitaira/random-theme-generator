import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Period } from "../components/pages/Period";
import { Theme } from "../components/pages/Theme";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="theme" element={<Theme />} />
        <Route path="period" element={<Period />} />
      </Routes>
    </BrowserRouter>
  );
};
