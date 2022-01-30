import { atom } from "recoil";

export const pageSgate = atom({
  key: "pageState",
  default: {
    currentPage: 1,
    description: "表示するテーマ数を決めましょう",
  },
});
