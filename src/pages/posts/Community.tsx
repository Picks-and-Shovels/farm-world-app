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
import Post from "../../components/Post/Post";
import User from "../../components/Post/User";

import "./Community.css";
import { add } from "ionicons/icons";

const user = new User(
  "u1",
  "Max",
  "https://ionicframework.com/docs/img/demos/avatar.svg"
);

const post = new Post(
  "p1",
  "Post 1",
  "This is the first post",
  "https://via.placeholder.com/150",
  "u1"
);

export const Community = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts" />
          </IonButtons>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="community-inner">
          <div className="community-header">
            <UserBio user={user} />
            <div className="post-header">
              <strong>{post.title}</strong>
              <div className="tags">#tag</div>
            </div>
          </div>
          <div className="community-content">
            <p>{post.content}</p>
            <IonList className="post-images">
              <div className="post-image">
                <img src={post.imageUrl} alt="post" />
              </div>
              <div className="post-image">
                <img src={post.imageUrl} alt="post" />
              </div>
              <div className="post-image">
                <img src={post.imageUrl} alt="post" />
              </div>
              <div className="post-image">
                <img src={post.imageUrl} alt="post" />
              </div>
            </IonList>
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
