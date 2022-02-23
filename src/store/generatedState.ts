import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const generatedState = atom({
  key: "generatedState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
