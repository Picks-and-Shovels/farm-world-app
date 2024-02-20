import Diary from "./Diary";
import { DiaryListItem } from "./DiaryListItem";

import "./DiaryList.css";

interface DiaryListProps {
  diaries: Diary[];
}

export const DiaryList = ({ diaries }: DiaryListProps) => {
  return (
    <div className="diary-list">
      {diaries.map((diary) => (
        <DiaryListItem key={diary.id} diary={diary} />
      ))}
    </div>
  );
};
