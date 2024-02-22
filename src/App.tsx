import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { book, home, newspaper,personAddOutline } from "ionicons/icons";
import LoginSignup from "./components/Oauth/LoginSignup";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Community } from "./pages/posts/Community";
import { CreateDiary } from "./pages/diaries/CreateDiary";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login-signup">
            <LoginSignup />
          </Route>
          <Route exact path="/home">
            <Tab1 />
          </Route>
          <Route exact path="/diary">
            <Tab2 />
          </Route>
          <Route path="/diary/:datetime" component={CreateDiary} />
          <Route exact path="/posts">
            <Tab3 />
          </Route>
          <Route path="/posts/:id" component={Community} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login-signup" href="/login-signup">
            <IonIcon aria-hidden= "true" icon = {personAddOutline} />
            <IonLabel>Login/Signup</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="diary" href="/diary">
            <IonIcon aria-hidden="true" icon={book} />
            <IonLabel>diary</IonLabel>
          </IonTabButton>
          <IonTabButton tab="posts" href="/posts">
            <IonIcon aria-hidden="true" icon={newspaper} />
            <IonLabel>community</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
