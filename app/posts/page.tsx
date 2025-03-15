import { Post } from "@/components/post";

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-3xl text-center mb-6">Последние новости</h1>

      <div className="grid grid-cols-3 gap-8">
        <Post />
      </div>
    </div>
  );
}
