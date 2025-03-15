import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Hello NextJS</h1>
      <div className="w-2xl h-[500px] relative">
        <Image
          className="mx-auto"
          style={{ objectFit: "cover" }}
          src="/nextjs3.webp"
          fill
          sizes="50vw"
          quality={50}
          alt="Next App"
          priority
        />
      </div>
    </div>
  );
}
