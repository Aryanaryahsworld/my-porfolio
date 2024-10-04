"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
  <Typewriter
    words={[
      "As a Financial Analyst with 4 years of experience at MetLife USA, and Magna Infotech ,  I bring a broad set of skills in data analysis, financial modeling, and business insights. I am proficient in programming languages like Python, R, SQL, and VBA, and use tools such as Flask, Django, and Tableau to deliver comprehensive financial reports and insights. My expertise spans across financial analytics, budgeting, portfolio risk, corporate finance, and credit risk modeling, alongside data wrangling and time series forecasting. I have a strong foundation in using tools like MS SQL, Power BI, and SAP, with experience working in both Agile and Waterfall methodologies. My technical acumen is supported by operating systems including Windows and Linux."
    ]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={30}
    delaySpeed={1000}
  />
</div>

    </motion.section>
  );
}
