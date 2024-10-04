"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      {skillsData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">
            {category.category}
          </h3>

          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {category.skills.map((skill, skillIndex) => (
              <motion.li
                key={skillIndex}
                className="relative bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 group overflow-hidden"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={skillIndex}
              >
                {skill.name}
                {hoveredSkill === skill.name && skill.icon && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black text-white dark:bg-white flex items-center justify-center dark:text-gray-900 scale-150">
                    {skill.icon}
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
