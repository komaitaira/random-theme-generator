import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const selectedThemeState = atom({
  key: "selectedThemeState",
  default: {
    selectedTheme: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const selectedPeriodState = atom({
  key: "selectedPeriodState",
  default: {
    selectedPeriod: "",
  },
  effects_UNSTABLE: [persistAtom],
});
