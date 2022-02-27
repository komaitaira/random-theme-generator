import React, { ReactNode, useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { SecondaryTheme } from "../components/pages/Themes";
import { SecondaryPeriod } from "../components/pages/Periods";
import { SecondaryConfirm } from "../components/pages/Confirms";
import { useCheckSelected } from "../hooks/useCheckSelected";
import { SecondaryResult } from "../components/pages/Result";
import { JsxElement } from "typescript";

type Paths = {
  current: string;
  next: string;
  component: ReactNode;
};

export const Paths = (): Paths => {
  const { pathname } = useLocation();
  const path = useMemo(() => {
    return [
      "/form/theme",
      "/form/period",
      "/form/confirm",
      "/default/result",
    ].find((path) => matchPath(path, pathname));
  }, [pathname]);
  console.log(path);

  const { themeState } = useCheckSelected();
  const obj: Paths = { current: "", next: "", component: null };
  switch (path) {
    case "/form/theme":
      obj.current = path;
      obj.next = "/form/period";
      obj.component = <SecondaryTheme />;
      break;
    case "/form/period":
      obj.current = path;
      obj.next = "/form/confirm";
      obj.component = <SecondaryPeriod />;
      break;
    case "/form/confirm":
      obj.current = path;
      obj.next = `/generate?limit=${themeState.selected}`;
      obj.component = <SecondaryConfirm />;
      break;
    case "/default/result":
      obj.current = path;
      obj.next = "";
      obj.component = <SecondaryResult />;
      break;
  }
  return obj;
};
