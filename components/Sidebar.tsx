"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 transition-transform transform",
        {
          "translate-x-0": isOpen,
          "-translate-x-full": !isOpen,
        }
      )}
      style={{ zIndex: 1000 }} // Ensures sidebar is on top
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <span className="text-gray-900 dark:text-gray-100">Close</span>
      </button>
      <nav className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-4 text-lg font-medium text-gray-500 dark:text-gray-300">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "px-4 py-2 hover:text-gray-900 dark:hover:text-gray-100",
                  {
                    "text-gray-900 dark:text-gray-100": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  onClose(); // Close the sidebar when a link is clicked
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
