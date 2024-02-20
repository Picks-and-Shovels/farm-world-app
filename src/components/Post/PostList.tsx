import Post from "./Post";
import { PostListItem } from "./PostListItem";

import "./PostList.css";
import { IonList } from "@ionic/react";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
