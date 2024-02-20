import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import "./CreateDiary.css";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { add } from "ionicons/icons";

interface CreateDiaryProps
  extends RouteComponentProps<{
    datetime: string;
  }> {}

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // use zeropad
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};

export const CreateDiary = ({ match }: CreateDiaryProps) => {
  const getPhoto = async () => {
    let permission = await Camera.requestPermissions();
    if (permission.photos !== "granted") {
      await Camera.requestPermissions({ permissions: ["photos"] });
    }
    const image = await Camera.getPhoto({
      source: CameraSource.Photos,
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    console.log(image);
  };
  const { datetime } = match.params;

  const title = formatDate(new Date(datetime));
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/diary" />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className="create-diary">
          <div className="tags">
            <div className="tag-input">
              <IonItem>
                <IonInput label="weather" placeholder="sunny"></IonInput>
              </IonItem>
            </div>
            <div className="tag-input">
              <IonItem>
                <IonInput label="plant" placeholder="tomato"></IonInput>
              </IonItem>
            </div>
          </div>

          <div className="content">
            <IonTextarea
              autoGrow
              placeholder="please enter content"
              rows={10}
            ></IonTextarea>
            <div
              className="photo-input"
              onClick={getPhoto}
              onTouchEnd={getPhoto}
            >
              <div className="photo-input-icon">
                <IonIcon icon={add} size="large" />
              </div>
            </div>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};
