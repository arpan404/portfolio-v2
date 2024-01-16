export type TECH =
  | "NodeJS"
  | "TailwindCSS"
  | "React"
  | "Firebase"
  | "NextJS"
  | "MySQL"
  | "Python"
  | "Express"
  | "Bootstrap"
  | "ReactNative"
  | "Typescript"
  | "Javascript"
  | "HTML"
  | "CSS"
  | "PHP"
  | "C"
  | "Cpp"
  | "Expo"
  | "MUI"
  | "MongoDB"
  | "PostreSQL"
  | "Redux"
  | "Zustand";

export type PROJECT_DETAIL = {
  name: string;
  description: string;
  shortDescription: string;
  codeLink?: string;
  liveLink?: string;
  thumbnail: string;
  tech: Array<TECH>;
  images?: Array<string>;
  slug: string;
};

const projectList: Array<PROJECT_DETAIL> = [
  {
    name: "Joor",
    description:
      "Joor is a cutting-edge, open-source backend framework specifically designed for NodeJS, offering full support for both TypeScript and JavaScript.",
    shortDescription: "A backend framework",
    codeLink: "https://github.com/arpan404/joor",
    liveLink: "https://www.npmjs.com/package/joor",
    thumbnail: "/images/projects/joor-thumbnail.png",
    tech: ["NodeJS", "Typescript", "Javascript"],
    slug: "joor",
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery",
    liveLink: "https://taskey.arpanbhandari.com.np/",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: [
      "NextJS",
      "Firebase",
      "Typescript",
      "Redux",
      "TailwindCSS",
      "MUI",
      "CSS",
    ],

    slug: "taskey",
  },
  {
    name: "Socioy",
    description: "Taskey is a ",
    shortDescription: "A social media webapp",
    codeLink: "https://github.com/arpan404/socioy-webapp-basic",
    thumbnail: "/images/projects/socioy-thumbnail.png",
    tech: ["PHP", "Javascript", "HTML", "CSS", "MySQL"],

    slug: "socioy",
  },
  {
    name: "EnKrypt",
    description: "A custom encryption algorithm",
    shortDescription: "A custom encryption algorithm",
    codeLink: "https://github.com/arpan404/enkrypt",
    thumbnail: "/images/projects/enkrypt-thumbnail.png",
    tech: ["Python"],

    slug: "enkrypt",
  },
  {
    name: "Ende",
    description: "Taskey is a ",
    shortDescription: "A webapp for encryption of messages",
    codeLink: "https://github.com/arpan404/ende",
    thumbnail: "/images/projects/ende-thumbnail.png",
    tech: ["React", "Javascript", "TailwindCSS"],
    slug: "ende",
  },
  {
    name: "Hotel App",
    description: "Taskey is a ",
    shortDescription: "A webapp for hotel.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/hotelapp-thumbnail.png",
    tech: [
      "NextJS",
      "Javascript",
      "NodeJS",
      "Express",
      "MySQL",
      "Redux",
      "TailwindCSS",
      "MUI",
    ],

    slug: "hotel-app",
  },
  {
    name: "UBT Alpha",
    description: "Taskey is a ",
    shortDescription: "A mobile app for simulating exam.",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.arpan404.ubtalpha",
    thumbnail: "/images/projects/ubtalpha-thumbnail.png",
    tech: ["ReactNative", "Typescript", "Expo", "TailwindCSS", "Zustand"],

    slug: "ubt-alpha",
  },
  {
    name: "Newsy",
    description: "Taskey is a ",
    shortDescription: "A webapp for getting news",
    codeLink: "https://github.com/arpan404/newsy",
    thumbnail: "/images/projects/newsy-thumbnail.png",
    tech: ["React", "Javascript", "Bootstrap"],

    slug: "newsy",
  },
  {
    name: "Texty",
    description: "Taskey is a ",
    shortDescription: "A webapp for manipulating strings",
    codeLink: "https://github.com/arpan404/texty",
    liveLink: "https://texty.arpanbhandari.com.np/",
    thumbnail: "/images/projects/texty-thumbnail.png",
    tech: ["React", "Javascript", "Bootstrap"],
    slug: "texty",
  },
];
export default projectList;
