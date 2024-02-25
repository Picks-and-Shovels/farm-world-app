import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import "./Tab3.css";
import { PostList } from "../components/Post/PostList";
import { add } from "ionicons/icons";
import Post from '../components/Post/Post';

const Tab3: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://honghyunmin.shop:3000/boards/posts');
      const rawData = await response.json();
      const transformedData = rawData.map((post: any) => new Post(
        post.id, // API와 Post 클래스의 필드를 맞춰주세요
        post.title,
        post.totalViews,
        post.totalLikes
      ));
      setPosts(transformedData);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await fetchPosts(); // 데이터 다시 불러오기
    event.detail.complete(); // 리프레셔 완료
  };

  useEffect(() => {
    fetchPosts(); // 컴포넌트 마운트 시 데이터 불러오기
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <PostList posts={posts} />
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon size="large" icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;