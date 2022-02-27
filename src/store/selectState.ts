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

export const getDateObj = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeekNum = date.getDay();
  const dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = dayOfWeekArray[dayOfWeekNum];
  return { year, month, day, dayOfWeek };
};
const d = getDateObj(new Date());

export const selectedPeriodState = atom({
  key: "selectedPeriodState",
  default: {
    selected: `${d.year}年${d.month}月${d.day}日(${d.dayOfWeek})`,
    selected_date: `${d.year}-${d.month}-${d.day}`,
  },
  effects_UNSTABLE: [persistAtom],
});
