import { fetchPosts } from "@/api/blogApi";
import { Posts } from "@/components/posts";
import { MyLoader } from "@/components/ui/my-loader";
import { Suspense } from "react";

export default async function PostsPage() {
  const posts = fetchPosts();
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-3xl text-center mb-6">Последние новости</h1>
      <p className="mb-8 text-center">
        Данная страница содержит все самые актуальные и интересные новости
      </p>

      <Suspense fallback={<MyLoader count={6} />}>
        <Posts posts={posts} />
      </Suspense>
    </div>
  );
}
