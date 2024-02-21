import { IonChip, IonList } from "@ionic/react";
import Diary from "./Diary";

import "./DiaryListItem.css";

interface DiaryListItemProps {
  diary: Diary;
}

export const DiaryListItem = ({ diary }: DiaryListItemProps) => {
  return (
    <div className="diary-item">
      <strong>{diary._date}</strong>
      <div className="diary-content">
        <p>{diary.content}</p>
      </div>
    </div>
  );
};
