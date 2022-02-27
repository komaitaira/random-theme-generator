import React, { ReactNode, useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { SecondaryTheme } from "../components/pages/Themes";
import { SecondaryPeriod } from "../components/pages/Periods";
import { SecondaryConfirm } from "../components/pages/Confirms";
import { useCheckSelected } from "../hooks/useCheckSelected";
import { SecondaryResult } from "../components/pages/Result";

type Paths = {
  back: string;
  current: string;
  next: string;
  component: ReactNode;
};

export const Paths = (): Paths => {
  const { pathname } = useLocation();
  const path = useMemo(() => {
    return ["/", "/period", "/confirm", "/result"].find((path) =>
      matchPath(path, pathname)
    );
  }, [pathname]);
  console.log(path);

  const { themeState } = useCheckSelected();
  const obj: Paths = { back: "", current: "", next: "", component: null };
  switch (path) {
    case "/":
      obj.back = "/";
      obj.current = path;
      obj.next = "/period";
      obj.component = <SecondaryTheme />;
      break;
    case "/period":
      obj.back = "/";
      obj.current = path;
      obj.next = "/confirm";
      obj.component = <SecondaryPeriod />;
      break;
    case "/confirm":
      obj.back = "/period";
      obj.current = path;
      obj.next = `/generate?limit=${themeState.selected}`;
      obj.component = <SecondaryConfirm />;
      break;
    case "/result":
      obj.back = "/";
      obj.current = path;
      obj.next = "";
      obj.component = <SecondaryResult />;
      break;
  }
  return obj;
};
