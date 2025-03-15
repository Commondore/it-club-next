"use client";
import { Post } from "@/components/posts/post";
import { IPost } from "@/interfaces/post";
import { use } from "react";

interface Props {
  posts: Promise<IPost[]>;
}

export const Posts = ({ posts }: Props) => {
  const data = use(posts);
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
