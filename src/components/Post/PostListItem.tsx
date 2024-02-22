import React from 'react';
import { IonIcon, IonRouterLink } from "@ionic/react";
import Post from "./Post";
import "./PostListItem.css";
import { chatboxEllipsesOutline, heartOutline,eyeOutline } from "ionicons/icons";

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
          <div className="views">
            <IonIcon icon={eyeOutline} />
            {post.totalViews}
          </div>
          <div className="likes">
            <IonIcon icon={heartOutline} />{post.totalLikes}
          </div>
        </div>
      </div>
    </div>
    </IonRouterLink>
  );
};  