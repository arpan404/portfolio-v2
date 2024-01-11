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
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },{
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },
  {
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },{
    name: "Taskey",
    description: "Taskey is a ",
    shortDescription: "The ultimate key to task mastery.",
    codeLink: "https://github.com/arpan404/joor",
    thumbnail: "/images/projects/taskey-thumbnail.png",
    tech: ["Node.JS"],
    tags: ["backend", "open source"],
  },
];
export default projectList;
