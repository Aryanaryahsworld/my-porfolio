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
      "With three years of hands-on experience in the tech industry, I've cultivated a deep expertise in tackling complex coding challenges and delivering innovative solutions. My journey with Ekeeda and LA Technologies has honed my skills in debugging intricate issues and driving projects to successful completion. I bring a fresh perspective and a hunger for learning new technologies to every job I undertake."
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
