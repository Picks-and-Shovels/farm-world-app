import { IonIcon, IonItem, IonRouterLink } from "@ionic/react";
import Post from "./Post";

import "./PostListItem.css";
import {
  chatboxEllipsesOutline,
  heart,
  heartOutline,
  thumbsUp,
} from "ionicons/icons";

interface PostListItemProps {
  post: Post;
}

export const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <IonRouterLink routerLink={`/posts/${post.id}`}>
      <div className="post-item">
        <div className="post-item-info">
          <strong>{post.title}</strong>
          <div className="tags">#tag</div>
          <div className="details">
            <div className="likes">
              <IonIcon icon={heartOutline} />
              10
            </div>
            <div className="comments">
              <IonIcon icon={chatboxEllipsesOutline} />5
            </div>
          </div>
        </div>
        <div className="post-item-img">
          <img src={post.imageUrl} alt="post" />
        </div>
      </div>
    </IonRouterLink>
  );
};
