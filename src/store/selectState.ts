import { atom } from "recoil";

export const selectedThemeState = atom({
  key: "selectedThemeState",
  default: {
    selectedTheme: "",
  },
});

export const selectedPeriodState = atom({
  key: "selectedPeriodState",
  default: {
    selectedPeriod: "",
  },
});
