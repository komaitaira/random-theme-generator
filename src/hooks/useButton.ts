import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { generatedState } from "../store/generatedState";
import { loadingState } from "../store/loadingState";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const useButton = () => {
  const [themeList, setThemeList] = useRecoilState(generatedState);
  const setLoading = useSetRecoilState(loadingState);
  const navigate = useNavigate();

  const onClickBack = useCallback((path: string) => {
    navigate(path);
  }, []);

  const onClickNext = useCallback((path: string) => {
    if (/\/generate\?limit=([1-9]|10)$/.test(path)) {
      onClickGenerate(path);
    } else {
      navigate(path);
    }
  }, []);

  const onClickGenerate = useCallback(async (path: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8000${path}`);
      setThemeList(res.data.themelist);
      navigate("/result");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { onClickBack, onClickNext };
};
