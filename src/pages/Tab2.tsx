import React, { useEffect, useState } from 'react';
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
import { RefresherEventDetail } from "@ionic/core";
import { IonRefresher, IonRefresherContent } from "@ionic/react";
import { useHistory } from "react-router";

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
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const history = useHistory();

  const fetchDiaries = async () => {
    try {
      const response = await fetch(`http://honghyunmin.shop:3000/journal/${date}`);
      const data = [await response.json()];
      setDiaries(data); // 데이터를 상태로 설정
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleDateChange = async (e: CustomEvent<any>) => {
    const selectedDate = e.detail.value;
    if (!selectedDate) return;
    setDate(selectedDate);
    await fetchDiaries(); // 선택한 날짜에 해당하는 데이터 다시 불러오기
    console.log("selected date: ", selectedDate);
  };

  useEffect(() => {
    fetchDiaries(); // 컴포넌트 마운트 시 데이터 불러오기
  }, []);

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
            locale="ko-KR"
            value={date}
            onIonChange={handleDateChange}
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
