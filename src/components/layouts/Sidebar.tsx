import { sidebarLinks } from "@/constants/general.const";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-grayfc px-4 py-6 ">
      {sidebarLinks.map((link) => (
        <SidebarLinks
          key={link.title}
          link={link}
          isActive={pathname === link.path}
        ></SidebarLinks>
      ))}
    </div>
  );
};

export default Sidebar;

interface TSidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

function SidebarLinks({ link, isActive }: TSidebarLinkProps) {
  return (
    <Link
      className={`
          py-4 px-6 flex gap-c10 items-center font-bold text-base text-gray80 rounded-xl  ${
            isActive ? "bg-primary text-grayfc" : "hover:text-primary"
          }
          `}
      href={link.path}
      key={link.title}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}
