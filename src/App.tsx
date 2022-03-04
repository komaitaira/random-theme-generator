import React from "react";
import { RecoilRoot } from "recoil";
import { Router } from "./routes/Router";

export const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};
