"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] dark:from-[#1f1f1f] dark:to-[#2e2e2e] py-12 rounded-lg shadow-lg mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <SectionHeading>My Educational Journey</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#9ca3af" : "#4b5563"}>
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#ffffff" : "#2b2b2b",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: `1px solid ${
                  theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
                }`,
                textAlign: "left",
                padding: "1rem",
              }}
              contentArrowStyle={{
                borderRight: `0.4rem solid ${
                  theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5)"
                }`,
              }}
              iconStyle={{
                background: theme === "light" ? "#ffffff" : "#2b2b2b",
                fontSize: "1.5rem",
                color: "#4b5563",
              }}
            >
              <h3 className="text-[20px] sm:text-[23px] font-semibold dark:text-white">
                {item.title}
              </h3>
              <p className="font-normal mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {item.body}
              </p>
              {item.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                  {item.description}
                </p>
              )}
              {item.points && (
                <ul className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base list-disc pl-5">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
