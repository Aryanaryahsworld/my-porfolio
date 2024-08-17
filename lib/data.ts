import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaSchoolSolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import Blog from "@/public/unityuprise.png";
import MediEase from "@/public/Gamingwesbite.png";
import MediVault from "@/public/brainxtumor.png";
import ChatAnalyzer from "@/public/ChatAnalyzer.png";

import { SiCodeforces, SiGithub, SiLinkedin } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certification",
    hash: "#certification",
  },
  {
    name: "Socials",
    hash: "#socials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Master in Computer Science and Engineering",
    body: "Santa Clara University, Santa Clara, CA",
    description:
      "I completed Master in Computer Science and Engineering ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    points: ["3.253/4 "],
    // icon: React.createElement(LuGraduationCap)
    // date: "2021 - 2025",
  },
  {
    title: "Bachelor in Computer Engineering",
    body: "Savitribai Phule Pune University, India",
    description: "",
    points: [
      "3.76/4",
    ],
    // icon: React.createElement(RiSchoolLine),
    // date: "",
  },
  // {
  //   title: "Holy Cross High School, Mumbai",
  //   body: "Maharashtra State Board (SSC)",
  //   description: "",

  //   points: ["Percentage: 78.20 / 100"],
  //   icon: React.createElement(LiaSchoolSolid),
  //   date: "2019",
  // },
] as const;

export const projectsData = [
 
  
  {
    title: "Brain x Tumor",
    description:
      "Developed a Streamlit app allows you to upload an MRI image and predict if there's a brain tumor or not. The app uses a trained Keras model to make the predictions.",
      tags: ["Python", "Matplotlib", "streamlit"],
    imageUrl: MediVault,
    gitlink: "https://github.com/coderx0319/Brain_Tumor_Prediction",
    livelink: "",
  },
  {
    title: "Disease-Prediction-Online",
    description:
      "This app will help you to analyze your disease symptoms and give you correct prediction by using Machine Learning on web.",
    tags: ["Python", "Matplotlib", "Seaborn", "streamlit"],
    imageUrl: ChatAnalyzer,
    gitlink: "https://github.com/Aryanaryahsworld/Health",
    livelink: "",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5),
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3),
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
  },
  // {
  //   name: "TypeScript",
  //   icon: React.createElement(SiTypescript),
  // },
  {
    name: "React",
    icon: React.createElement(FaReact),
  },
  {
    name: "Next.js",
    icon: React.createElement(TbBrandNextjs),
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
  },
  // {
  //   name: "C++",
  //   icon: React.createElement(SiCplusplus),
  // },
  // {
  //   name: "Java",
  //   icon: React.createElement(FaJava),
  // },
  {
    name: "Python",
    icon: React.createElement(FaPython),
  },
  {
    name: "SQL",
    icon: React.createElement(SiMysql),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt),
  },
] as const;

export const socialLinks = [
  {
    name: "Linkden",
    url: "http://www.linkedin.com/in/aryan-s-43299c99/",
    icon: React.createElement(SiLinkedin),
  },
  {
    name: "Github",
    url: "https://github.com/Aryanaryahsworld/",
    icon: React.createElement(SiGithub),
  },
  // {
  //   name: "Leetcode",
  //   url: "https://leetcode.com/u/shantanucodes/",
  //   icon: React.createElement(SiLeetcode),
  // },
] as const;
