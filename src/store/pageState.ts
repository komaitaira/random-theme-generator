import { atom } from "recoil";

export const pageSgate = atom({
  key: "pageState",
  default: {
    currentPage: { theme: 1, period: 2, generate: 3 },
    description: {
      theme: "表示するテーマ数を決めましょう",
      period: "撮影期限を決めましょう",
      generate: "この内容でテーマを生成します",
    },
  },
});
