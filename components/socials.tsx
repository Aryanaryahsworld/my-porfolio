"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { socialLinks } from "@/lib/data";
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

export default function Socials() {
  const { ref } = useSectionInView("Socials");

  return (
    <section
      id="socials"
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Profile Links</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-2xl text-gray-800">
        {socialLinks.map((social, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:text-white hover:bg-gray-900 dark:hover:text-black dark:hover:bg-white transition "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex items-center hover:scale-110">
              <a
                href={social.url}
                target="_blank"
                className="flex items-center"
              >
                <span className="p-2">{social.name}</span>
                {social.icon}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
