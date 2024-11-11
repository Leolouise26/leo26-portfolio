"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome,  FaEnvelope} from "react-icons/fa"; // Import icons
import {HiUser, HiViewColumns} from "react-icons/hi2"
const links = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    path: "/about",
    icon: <HiUser />,
  },
  {
    name: "Projects",
    path: "/work",
    icon: <HiViewColumns />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 xl:right-[2%] z-50 top-auto w-full xl:w-16 xl:max-w-md xl:h-screen bg-transparent">
     
      <div className="flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 
      xl:h-max py-8 bg-white/10 backdrop-blur-sm text-white 
      text-3xl xl:text-xl xl:rounded-full">
        
        {links.map((link, index) => (
          <Link href={link.path} key={index}>
            <div className="relative group">
              <div
                className={`p-2 rounded-full transition-all ${
                  link.path === pathname
                    ? "text-accent border-accent border-2"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.icon}
              </div>
              {/* Tooltip text */}
              <span className="absolute right-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 
              group-hover:opacity-100 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded whitespace-nowrap transition-opacity duration-300">
                {link.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
