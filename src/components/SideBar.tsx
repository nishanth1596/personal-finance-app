"use client";

import { navItems } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-grey-900 fixed bottom-0 z-10 order-2 flex w-full items-center justify-between rounded-t-xl px-4 pt-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            href={item.href}
            className={`px-5 pt-2 pb-5 ${
              isActive ? "bg-beige-100 rounded-t-xl" : ""
            }`}
            key={item.name}
          >
            <Image alt={item.name} src={item.icon} height={24} width={24} />
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBar;
