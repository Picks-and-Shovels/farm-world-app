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
            {post.totalViews} {/* 수정됨 */}
          </div>
          <div className="likes">
            {/* 조회수 대신 댓글 수 또는 다른 정보를 표시할 수 있습니다. */}
            <IonIcon icon={heartOutline} />{post.totalLikes} {/* 수정됨 */}
          </div>
        </div>
      </div>
    </div>
    </IonRouterLink>
  );
};