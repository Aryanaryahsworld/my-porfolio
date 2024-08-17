"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Sidebar from "./Sidebar";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="z-[1000] relative mx-auto max-w-full ">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <nav
  className={clsx(
    "flex fixed top-[0.15rem] h-12 py-2 transition-transform sm:top-[1.7rem] sm:h-[initial] sm:py-0",
    {
      // Apply additional classes based on the isMobile state
      "left-1 -translate-x-1/2 sm:hidden": isMobile,
      "left-1/2 -translate-x-1/2 sm:flex": !isMobile,
    }
  )}
>

          <ul className="hidden sm:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-750 dark:text-gray-200": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-900"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-4 left-4 z-[1000] p-2 rounded-full bg-white shadow-lg dark:bg-gray-800 sm:hidden"
          >
            {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      
    </>
  );
}
