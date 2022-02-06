// ボタン操作カスタムフック

import React from "react";
import { useNavigate } from "react-router-dom";

export const useButton = () => {
  const navigate = useNavigate();

  const onClickBack = (path: string) => {
    console.log("onClickBack called.");
    navigate(path);
  };

  const onClickNext = (path: string) => {
    console.log("onClickNext called.");
    navigate(path);
  };

  const onClickGenerate = (path: string) => {
    alert(path);
  };

  return { onClickBack, onClickNext, onClickGenerate };
};
