import { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { UserBio } from "../../components/Post/UserBio";
import PostDetail from "../../components/Post/PostDetail";
import User from "../../components/Post/User";
import { add } from "ionicons/icons";

import "./Community.css";
import { useParams } from "react-router";

export const Community = () => {
  const {postId} = useParams<{postId: string}>();
  const [user, setUser] = useState<User | null>(null);
  const [postDetail, setPost] = useState<PostDetail | null>(null);

  useEffect(() => {
    // Fetch user data from backend API
    fetchUser().then((userData) => {
      setUser(userData);
    });

    // Fetch post data from backend API
    fetchPost().then((postDetailData) => {
      setPost(postDetailData);
    });
  }, []);

  const fetchPost = async () => {
    // Make API call to fetch post data
    const response = await fetch(`http://honghyunmin.shop:3000/boards/posts/${postId}`);
    const postDetailData = await response.json();
    return new PostDetail(
      postDetailData.id,
      postDetailData.createdAt,
      postDetailData.updatedAt,
      postDetailData.title,
      postDetailData.content,
      postDetailData.totalViews,
      postDetailData.totalLikes,
      postDetailData.writerId
    );
  };

  const fetchUser = async () => {
    // Make API call to fetch user data
    const response = await fetch(`http://honghyunmin.shop:3000/user/${postDetail?.writerId}`);
    const userData = await response.json();
    return new User(
      userData.id,
      userData.nickname,
      userData.username,
      userData.name,
      userData.age
    );
  };

  if (!user || !postDetail) {
    return null; // Render loading state or handle error
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts"/>
          </IonButtons>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="community-inner">
          <div className="community-header">
            <UserBio user={user} />
            <div className="post-header">
              <strong>{postDetail.title}</strong>
              <div className="tags">#tag</div>
            </div>
          </div>
          <div className="community-content">
            <p>{postDetail.content}</p>
          </div>
        </div>
        <div className="community-comments">
          <div className="comment">
            <UserBio user={user} />
            <div className="comment-content">
              <p>This is a comment</p>
              <p className="comment-date">1h ago</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
