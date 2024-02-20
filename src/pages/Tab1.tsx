import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

interface TileProps {
  src?: string;
}
const Tile: React.FC<TileProps> = ({
  src = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="tile">
      <img src={src} alt="tile" />
    </div>
  );
};

const Tab1: React.FC = () => {
  return (
    <IonPage className="home-container">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>My Farm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <div className="tile-container">
          <Tile />
        </div> */}
        <div className="map-container">
          <div className="field-list">
            <div className="field-container">
              <div className="field-image">
                <img src="/assets/carrot.png" alt="field" />
              </div>
              <div className="percentage">50%</div>
              <div className="overlay" style={{ height: "50%" }}></div>
            </div>
            <div className="field-container">
              <div className="field-image">
                <img src="/assets/tomato.png" alt="field" />
              </div>
              <div className="percentage">40%</div>
              <div className="overlay" style={{ height: "40%" }}></div>
            </div>
            <div className="field-container">
              <div className="field-image">
                <img src="/assets/lettuce.png" alt="field" />
              </div>
              <div className="percentage">80%</div>
              <div className="overlay" style={{ height: "80%" }}></div>
            </div>
            <div className="field-container">
              <div className="field-image">
                <img src="/assets/carrot.png" alt="field" />
              </div>
              <div className="percentage">10%</div>
              <div className="overlay" style={{ height: "10%" }}></div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
