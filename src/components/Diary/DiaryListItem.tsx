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
      <div className="tags">
        {diary.tags.map((tag) => (
          <IonChip outline key={tag}>
            {tag}
          </IonChip>
        ))}
      </div>
      <div className="diary-content">
        <p>{diary.content}</p>
        <IonList className="diary-images">
          {diary.images.map((imageUrl, idx) => (
            <div className="diary-image" key={idx}>
              <img src={imageUrl} alt="diary" />
            </div>
          ))}
        </IonList>
      </div>
    </div>
  );
};
