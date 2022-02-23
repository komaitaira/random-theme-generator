// ボタン操作カスタムフック

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { generatedState } from "../store/generatedState";
import { loadingState } from "../store/loadingState";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const useButton = () => {
  const [themeList, setThemeList] = useRecoilState(generatedState);
  const setLoading = useSetRecoilState(loadingState);
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
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8000${path}`);
      setThemeList(res.data.themelist);
      console.log("onClickGenerate called.");
      navigate("/result");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { onClickBack, onClickNext, onClickGenerate };
};
