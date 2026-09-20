export const siteConfig = {
  name: "Danyal Özbek",
  title: "Software Engineer",
  description: "Portfolio website of Danyal Özbek",
  accentColor: "#1d4ed8",
  social: {
    email: "danyalozbek50@gmail.com",
    linkedin: "https://www.linkedin.com/in/danyal-%C3%B6zbek-3295912b8/",
    github: "https://github.com/DanOzb",
  },
  aboutMe:
    "I'm a software engineer based in Stockholm with a BSc in Computer and Systems Sciences from Stockholm University. I work mostly across backend development and machine learning/AI. Currently building project star, a WYSIWYG website editor in React and Typescript. I'm looking for my first full-time engineering role, ideally somewhere small enough that I get to touch the whole stack. ",
  skills: ["Java", "Spring Boot", "Kotlin", "Jetpack Compose", "Python", "Typescript/Javascript", "React", "Docker"],
  projects: [
    {
      name: "Project Star", 
      description: 
        "WYSIWYG website editor with LLM suppor",
      link: "https://github.com/DanOzb/Project-Star",
      skills: ["Typescript", "React"]
    },
    {
      name: "Assay",
      description:
        "Automatic test generation tool for Kotlin-Gradle projects",
      link: "https://github.com/DanOzb/Assay",
      skills: ["Kotlin", "Gradle"],
    },
    {
      name: "Trade Surveillance",
      description:
        "Outlier detection on trades with Spring Boot. Hobby project learning about fintech and financial crimes",
      link: "https://github.com/DanOzb/trade-surveillance",
      skills: ["Java", "Spring Boot"],
    },
    {
      name: "GiftApp",
      description:
        "Gift giving app with customizable multimedia presents",
      link: "https://github.com/DanOzb/GiftApp",
      skills: ["Kotlin", "Jetpack Compose", "Hilt"],
    },
    {
      name: "Game Engine API",
      description:
        "Lightweight object oriented Game Engine API for 2D games",
      link: "https://github.com/DanOzb/Game-Engine",
      skills: ["C++", "SDL3"],
    },
  ],
  education: [
    {
      school: "Stockholm University",
      degree: "Bachelor in Computer and Systems Sciences",
      dateRange: "2023 - 2026",
      achievements: ["Completed thesis on unsupervised anomaly detection for IT telemetry data (Full thesis available on request)"],
    }
  ],
};
