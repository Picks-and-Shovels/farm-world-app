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
import Post from "../components/Post/Post";
import { add } from "ionicons/icons";

const posts = [
  new Post(
    "p1",
    "Post 1",
    "This is the first post",
    "https://via.placeholder.com/150",
    "u1"
  ),
  new Post(
    "p2",
    "Post 2",
    "This is the second post",
    "https://via.placeholder.com/150",
    "u2"
  ),
];

const Tab3: React.FC = () => {
  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 500);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
