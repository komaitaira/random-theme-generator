import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectedThemeState = atom({
  key: "selectedThemeState",
  default: {
    selected: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const selectedPeriodState = atom({
  key: "selectedPeriodState",
  default: {
    selected: "",
  },
  effects_UNSTABLE: [persistAtom],
});
