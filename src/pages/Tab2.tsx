import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { create, createOutline, heart, heartOutline } from "ionicons/icons";
import Diary from "../components/Diary/Diary";
import { DiaryList } from "../components/Diary/DiaryList";
import { useState } from "react";

const diaries = [
  new Diary("1", "2024-02-19", ["#tag1", "#tag2"], "This is the first diary", [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]),
  new Diary("2", "2024-02-20", ["#tag1", "#tag2"], "This is the second diary", [
    "https://via.placeholder.com/150",
  ]),
  new Diary("3", "2024-02-21", ["#tag1", "#tag2"], "This is the third diary", [
    "https://via.placeholder.com/150",
  ]),
];
diaries.sort((a, b) => b.date.getTime() - a.date.getTime());

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // use zeropad
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};

const Tab2: React.FC = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  console.log(date);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton href={`/diary/${date}`}>
              <IonIcon icon={createOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Farming Diary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="diary-content">
          <IonDatetime
            presentation="date"
            locale="en-US"
            value={date}
            highlightedDates={diaries.map((diary) => ({
              date: diary._date,
              backgroundColor: "#c8e5d0",
              textColor: "#529F5A",
            }))}
          ></IonDatetime>
        </div>
        <DiaryList diaries={diaries} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
