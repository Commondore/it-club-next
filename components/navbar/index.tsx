"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { navData } from "@/components/navbar/navData";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="px-10 py-4 border-b border-amber-100 mb-4 flex justify-between items-center bg-white">
      <div>
        <Image
          src="/next.svg"
          width={100}
          height={50}
          alt="Next js"
          style={{ width: 100, height: 50 }}
        />
      </div>

      <nav className="flex gap-3 items-center">
        {navData.map((item) => {
          return (
            <Link
              key={item.href}
              className={cn("text-black", pathname === item.href && "text-amber-600!")}
              href={item.href}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
