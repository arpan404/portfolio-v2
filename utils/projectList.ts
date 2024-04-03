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
    description: "Taskey is a web-app which allows to manage yoour task.",
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
    description:
      "Socioy is a social media site developed as a school project. It allows use to post moments, be friends, and chat. It implement sophisticated search algorithms, and recommendation system.",
    shortDescription: "A social media webapp",
    codeLink: "https://github.com/arpan404/socioy-webapp-basic",
    thumbnail: "/images/projects/socioy-thumbnail.png",
    tech: ["PHP", "Javascript", "HTML", "CSS", "MySQL"],

    slug: "socioy",
  },
  {
    name: "EnKrypt",
    description:
      "EnKrypt is a custom encryption and decryption algorithm, that acts as an additional layer over the existing popular algorithm.",
    shortDescription: "A custom encryption algorithm",
    codeLink: "https://github.com/arpan404/enkrypt",
    thumbnail: "/images/projects/enkrypt-thumbnail.png",
    tech: ["Python"],

    slug: "enkrypt",
  },
  {
    name: "Ende",
    description:
      "Ende is a web-app that allows user to securely encrypt and decrypt message.",
    shortDescription: "A webapp for encryption of messages",
    codeLink: "https://github.com/arpan404/ende",
    thumbnail: "/images/projects/ende-thumbnail.png",
    tech: ["React", "Javascript", "TailwindCSS"],
    slug: "ende",
  },
  {
    name: "Hotel App",
    description:
      "This webapp allows the user to book hotel room, and contact hotel staffs. It implements local payment gateway. It allows admin to add room, food items, images to gallery, and blogs.",
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
    description:
      "UBT Alpha is a mobile application, primarily made for Android using React Native. It simulates the EPS TOPIK exam.",
    shortDescription: "A mobile app for simulating exam.",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.arpan405.alphaubt",
    thumbnail: "/images/projects/ubtalpha-thumbnail.png",
    tech: ["ReactNative", "Typescript", "Expo", "TailwindCSS", "Zustand"],

    slug: "ubt-alpha",
  },
  {
    name: "Newsy",
    description:
      "Newsy is a web app that uses News API to get news data, and presents them in readable and proper format. It allows seraching news, and fetching news of different categories.",
    shortDescription: "A webapp for getting news",
    codeLink: "https://github.com/arpan404/newsy",
    thumbnail: "/images/projects/newsy-thumbnail.png",
    tech: ["React", "Javascript", "Bootstrap"],

    slug: "newsy",
  },
  {
    name: "Texty",
    description:
      "Texty is a text utility web tool, which I developed while learning React.",
    shortDescription: "A webapp for manipulating strings",
    codeLink: "https://github.com/arpan404/texty",
    liveLink: "https://texty.arpanbhandari.com.np/",
    thumbnail: "/images/projects/texty-thumbnail.png",
    tech: ["React", "Javascript", "Bootstrap"],
    slug: "texty",
  },
];
export default projectList;
