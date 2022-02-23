// ボタン操作カスタムフック

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

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
    console.log(path);
    axios.get(`http://localhost:8000${path}`).then((res) => {
      console.log(res.data);
    });
  };

  return { onClickBack, onClickNext, onClickGenerate };
};
