// components/Certification.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { certificationsData } from "@/lib/certificationsData";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import { FaCertificate } from "react-icons/fa";

export default function Certification() {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <section id="certification" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Certifications</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#6366f1" : "#3b82f6"}>
        {certificationsData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible={inView}
            contentStyle={{
              background:
                theme === "light"
                  ? "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)"
                  : "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
              border: "none",
              borderRadius: "12px",
              textAlign: "left",
              padding: "1.5rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #6366f1"
                  : "0.4rem solid #3b82f6",
            }}
            iconStyle={{
              background: theme === "light" ? "#6366f1" : "#3b82f6",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<FaCertificate size={24} />}
          >
            <h3 className="text-xl font-bold dark:text-white text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm font-medium mt-2 dark:text-gray-300 text-gray-600">
              {item.institution} - {item.date}
            </p>
            <p className="font-normal mt-4 dark:text-gray-300 text-gray-700">
              {item.description}
            </p>
            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-blue-500 dark:text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}