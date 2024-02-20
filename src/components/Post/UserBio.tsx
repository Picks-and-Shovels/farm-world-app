import { IonAvatar } from "@ionic/react";

import User from "./User";

import "./UserBio.css";

interface UserBioProps {
  user: User;
}

export const UserBio = ({ user }: UserBioProps) => {
  return (
    <div className="user-bio-with-username">
      <IonAvatar>
        <img
          alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        />
      </IonAvatar>
      <strong>{user.name}</strong>
    </div>
  );
};
