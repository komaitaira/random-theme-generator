// ボタン操作カスタムフック

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { generatedState } from "../store/generatedState";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const useButton = () => {
  const [themeList, setThemeList] = useRecoilState(generatedState);
  const navigate = useNavigate();

  console.log(themeList);

  const onClickBack = (path: string) => {
    console.log("onClickBack called.");
    navigate(path);
  };

  const onClickNext = (path: string) => {
    console.log("onClickNext called.");
    navigate(path);
  };

  const onClickGenerate = async (path: string) => {
    try {
      const res = await axios.get(`http://localhost:8000${path}`);
      setThemeList(res.data.themelist);
      console.log("onClickGenerate called.");
    } catch (error) {
      console.error(error);
    }
  };

  return { onClickBack, onClickNext, onClickGenerate };
};
