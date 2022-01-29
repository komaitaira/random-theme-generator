import React from "react";
import { Router } from "./routes/Router";

export const App = () => {
  console.log("call App.");
  return (
    <>
      <Router />
    </>
  );
};
