import { useRecoilValue } from "recoil";
import { selectedPeriodState, selectedThemeState } from "../store/selectState";

export const useCheckSelected = () => {
  const themeState = useRecoilValue(selectedThemeState);
  const periodState = useRecoilValue(selectedPeriodState);

  const isSelectedAll = () => {
    if (themeState.selected !== "" && periodState.selected !== "") {
      return true;
    } else {
      return false;
    }
  };
  return { themeState, periodState, isSelectedAll };
};
