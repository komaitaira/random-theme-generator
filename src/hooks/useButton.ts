import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { generatedState } from "../store/generatedState";
import { loadingState } from "../store/loadingState";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const useButton = () => {
  const setThemeList = useSetRecoilState(generatedState);
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
      const res = await axios.get(`${API_ENDPOINT}${path}`);
      setThemeList(res.data.themelist);
      if (res.data.themelist) {
        navigate("/result");
      } else {
        throw new Error(`【Failed to get response】-${res}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { onClickBack, onClickNext };
};
