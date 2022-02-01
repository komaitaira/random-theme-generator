import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const pageState = atom({
  key: "pageState",
  default: {
    currentPage: 1,
    description: "表示するテーマ数を決めましょう",
  },
  effects_UNSTABLE: [persistAtom],
});
