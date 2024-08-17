"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { achievementsData } from "@/lib/achievementsData";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import { FaTrophy } from "react-icons/fa"; // Example icon, you can choose a different one

export default function Achievements() {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <section id="achievements" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Achievements</SectionHeading>
      <div
        className={`grid gap-6
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
        `}
      >
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out
              ${index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : "bg-gray-200 dark:bg-gray-800"}
              transform ${inView ? "translate-x-0" : "translate-x-8"}
              h-[400px] // Fixed height for cards
              flex flex-col
              `}
            style={{
              transform: `translateX(${index % 2 === 0 ? 0 : 20}px)`, // Create the unique design effect
            }}
          >
            <div
              className={`absolute -top-4 left-0 w-3 h-3 rounded-full ${index % 2 === 0 ? "bg-blue-500" : "bg-green-500"}`}
              style={{ transform: `translateX(${index % 2 === 0 ? 0 : 20}px)` }}
            />
            <div className="flex-shrink-0 flex items-center mb-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                  ${index % 2 === 0 ? "bg-blue-500" : "bg-green-500"} text-white`}
              >
                <FaTrophy size={24} /> {/* Corrected to only use 'size' prop */}
              </div>
              <div className="ml-4 flex-1">
                <h3
                  className="text-xl font-bold dark:text-white text-gray-900"
                  style={{
                    height: "90px", // Adjust height based on font size and line height
                    overflow: "hidden", // Hide overflow text
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Clamp the text to 3 lines (for about 20 words)
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </h3>
                <p className="text-sm font-medium mt-1 dark:text-gray-300 text-gray-600 truncate">
                  {item.date}
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-normal mt-2 dark:text-gray-300 text-gray-700 line-clamp-5">
                {item.description}
              </p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-blue-500 dark:text-blue-400 hover:underline"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
