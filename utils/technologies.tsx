import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs, TbBrandReactNative, TbBrandCpp } from "react-icons/tb";
import { GiBearFace } from "react-icons/gi";
import {
  SiMysql,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiExpo,
  SiMui,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiPhp,
} from "react-icons/si";
import { FaC } from "react-icons/fa6";
import {
  FaCss3,
  FaNodeJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import { TECH } from "./projectList";

const technologies: Record<TECH, any> = {
  TailwindCSS: (
    <BiLogoTailwindCss
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="TailwindCSS"
    />
  ),
  NodeJS: (
    <FaNodeJs
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="NodeJS"
    />
  ),
  React: (
    <FaReact
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="React"
    />
  ),
  Firebase: (
    <IoLogoFirebase
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Firebase"
    />
  ),
  NextJS: (
    <TbBrandNextjs
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="NextJS"
    />
  ),
  MySQL: (
    <SiMysql
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="MySQL"
    />
  ),
  Python: (
    <FaPython
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Python"
    />
  ),
  Express: (
    <SiExpress
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Express"
    />
  ),
  Bootstrap: (
    <FaBootstrap
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Bootstrap"
    />
  ),
  ReactNative: (
    <TbBrandReactNative
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="ReactNative"
    />
  ),
  Typescript: (
    <SiTypescript
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Typescript"
    />
  ),
  Javascript: (
    <SiJavascript
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Javascript"
    />
  ),
  HTML: (
    <FaHtml5
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="HTML"
    />
  ),
  CSS: (
    <FaCss3
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="CSS"
    />
  ),
  PHP: (
    <SiPhp
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="PHP"
    />
  ),
  C: (
    <FaC
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="ReactNative"
    />
  ),
  Cpp: (
    <TbBrandCpp
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="C++"
    />
  ),
  Expo: (
    <SiExpo
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Expo"
    />
  ),
  MUI: (
    <SiMui
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="MUI"
    />
  ),
  MongoDB: (
    <SiMongodb
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="MongoDB"
    />
  ),
  PostreSQL: (
    <SiPostgresql
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="PostreSQL"
    />
  ),
  Redux: (
    <SiRedux
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Redux"
    />
  ),
  Zustand: (
    <GiBearFace
      className="text-gray-300 text-3xl hover:text-gray-100 cursor-pointer"
      title="Zustand"
    />
  ),
};

export default technologies;
