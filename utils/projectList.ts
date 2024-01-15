type TECH = "Node.JS" | "";
type TAGS = "backend" | "open source" | "frontend";
export type PROJECT_DETAIL = {
  name: string;
  description: string;
  shortDescription: string;
  codeLink?: string;
  liveLink?: string;
  thumbnail: string;
  tech: Array<TECH>;
  tags: Array<TAGS>;
  images?: Array<string>;
  slug: string;
};

const projectList: Array<PROJECT_DETAIL> = [
  {
    name: "Joor",
    description:
      "Joor is a cutting-edge, open-source backend framework specifically designed for Node.js, offering full support for both TypeScript and JavaScript.",
    shortDescription: "A backend framework",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/joor-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "joor",
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "taskey",
  },
  {
    name: "Socioy",
    description: "Taskey is a ",
    shortDescription: "A social media webapp",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/socioy-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "socioy",
  },
  {
    name: "EnKrypt",
    description: "A custom encryption algorithm",
    shortDescription: "A custom encryption algorithm",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/enkrypt-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "enkrypt",
  },
  {
    name: "Ende",
    description: "Taskey is a ",
    shortDescription: "A webapp for encryption of messages",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/ende-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "ende",
  },
  {
    name: "Hotel App",
    description: "Taskey is a ",
    shortDescription: "A webapp for hotel.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/hotelapp-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "hotel-app",
  },
  {
    name: "UBT Alpha",
    description: "Taskey is a ",
    shortDescription: "A mobile app for simulating exam.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/ubtalpha-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "ubt-alpha",
  },
  {
    name: "Newsy",
    description: "Taskey is a ",
    shortDescription: "A webapp for getting news",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/newsy-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "newsy",
  },
  {
    name: "Texty",
    description: "Taskey is a ",
    shortDescription: "A webapp for manipulating strings",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/texty-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
    slug: "texty",
  },
];
export default projectList;
