import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center my-10">
      <h1 className="text-5xl flex flex-col items-center gap-6">
        <span className="text-7xl">404</span>
        <span className="font-normal">Страница не найдена</span>
      </h1>
      <Link className="px-8 py-4 bg-green-600 rounded-3xl mt-4 text-white inline-flex" href="/">
        Вернуться на главную
      </Link>
    </div>
  );
}
