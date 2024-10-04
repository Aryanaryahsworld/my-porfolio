import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaSchoolSolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import MediVault from "@/public/brainxtumor.png";
import Budgety from "@/public/Budgety.png";
import Tours from "@/public/tours.png";
import ChatAnalyzer from "@/public/diesesepred.jpg";
import { SiPython, SiR, SiMysql, SiMicrosoft, SiFlask, SiDjango, SiPostgresql, SiMongodb, SiOracle,  SiGit, SiGithub, SiPandas, SiNumpy, SiApacheairflow, SiSnowflake, SiTableau, SiPowerbi, SiMicrosoftaccess,  SiPycharm, SiJupyter, SiVisualstudiocode, SiJira  } from 'react-icons/si';
import { SiCodeforces, SiGithub, SiLinkedin } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
// import { SiJavascript } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
// import { SiFlask } from "react-icons/si";
// import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
// import { SiMysql } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
// import { SiPandas } from "react-icons/si";
// import { SiNumpy } from "react-icons/si";
// import { SiTableau } from "react-icons/si";
// import { SiPowerbi } from "react-icons/si";
// import { SiJupyter } from "react-icons/si";
// import { SiScikitlearn } from "react-icons/si";
// import { SiReact } from "react-icons/si";

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
    title: "Tours Management",
    description:
      "Discover and book amazing tours with ToursManagement: your go-to platform for unforgettable travel experiences and seamless bookings.",
      tags: ["Javascript", "React", "Html","css"],
    imageUrl: Tours,
    gitlink: "https://github.com/Aryanaryahsworld/TourManagement",
    livelink: "https://aryan-tours.netlify.app",
  },
   {
    title: "Budgety",
    description:
      "Budgety web app is a utility single page web app that helps you calculate and visualise your budget.",
      tags: ["Javascript", "Html", "Css"],
    imageUrl: Budgety,
    gitlink: "https://github.com/Aryanaryahsworld/Budgety",
    livelink: "aryanbudgety.netlify.app",
  },
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
      "This app will analyze your disease symptoms, prediction by using Machine Learning on web.",
    tags: ["Python", "Matplotlib", "streamlit"],
    imageUrl: ChatAnalyzer,
    gitlink: "https://github.com/Aryanaryahsworld/Health",
    livelink: "",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: React.createElement(SiPython) },
      { name: "R", icon: React.createElement(SiR) },
      { name: "SQL", icon: React.createElement(SiMysql) },
      { name: "VBA", icon: React.createElement(SiMicrosoft) },
    ],
  },
  {
    category: "IDEs",
    skills: [
      { name: "Visual Studio Code", icon: React.createElement(SiVisualstudiocode) },
      { name: "PyCharm", icon: React.createElement(SiPycharm) },
      { name: "Jupyter Notebook", icon: React.createElement(SiJupyter) },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "Flask", icon: React.createElement(SiFlask) },
      { name: "Django", icon: React.createElement(SiDjango) },
      { name: "MS SQL", icon: React.createElement(SiMysql) },
      { name: "MySQL", icon: React.createElement(SiMysql) },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
      { name: "MongoDB", icon: React.createElement(SiMongodb) },
      { name: "Oracle Fusion", icon: React.createElement(SiOracle) },
      // { name: "NetSuite", icon: React.createElement(SiNetsuite) },
      { name: "Git", icon: React.createElement(SiGit) },
      { name: "GitHub", icon: React.createElement(SiGithub) },
    ],
  },
  {
    category: "Data Processing & Streaming",
    skills: [
      { name: "PySpark", icon: React.createElement(SiPython) },
      { name: "Pandas", icon: React.createElement(SiPandas) },
      { name: "NumPy", icon: React.createElement(SiNumpy) },
      { name: "Airflow", icon: React.createElement(SiApacheairflow) },
      // { name: "Snowflake", icon: React.createElement(SiSnowflake) },
      // { name: "Matplotlib", icon: React.createElement(SiMatplotlib) },
      // { name: "SciPy", icon: React.createElement(SiScipy) },
    ],
  },
  {
    category: "Reporting Tools",
    skills: [
      { name: "MS Access", icon: React.createElement(SiMicrosoftaccess) },
      { name: "MS Word", icon: React.createElement(SiMicrosoft) },
      // { name: "MS SharePoint", icon: React.createElement(SiSharepoint) },
      { name: "MS Project", icon: React.createElement(SiMicrosoft) },
      { name: "MS PowerPoint", icon: React.createElement(SiMicrosoft) },
    ],
  },
  {
    category: "Visualization Tool/Other Skills",
    skills: [
      { name: "Tableau", icon: React.createElement(SiTableau) },
      { name: "Power BI", icon: React.createElement(SiPowerbi) },
      { name: "Microsoft Excel", icon: React.createElement(SiMicrosoft) },
      { name: "Jira", icon: React.createElement(SiJira) },
    ],
  },
  {
    category: "Methodology",
    skills: [
      { name: "SDLC", icon: React.createElement(SiPython) }, // Placeholder icon
      { name: "Agile", icon: React.createElement(SiPython) }, // Placeholder icon
      { name: "Waterfall", icon: React.createElement(SiPython) }, // Placeholder icon
    ],
  },
  {
    category: "Financial Skills",
    skills: [
      // { name: "SAP", icon: React.createElement(SiSap) },
      { name: "Statistical Modeling", icon: React.createElement(SiPython) }, // Placeholder icon
      { name: "Financial Analytics", icon: React.createElement(SiPython) }, // Placeholder icon
      { name: "Time Series Analysis & Forecasting", icon: React.createElement(SiPython) }, // Placeholder icon
      { name: "Credit Risk Modeling", icon: React.createElement(SiPython) }, // Placeholder icon
    ],
  },
  {
    category: "Operating System",
    skills: [
      { name: "Windows", icon: React.createElement(SiMicrosoft) },
      { name: "Linux", icon: React.createElement(SiPython) }, // Placeholder icon
    ],
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
