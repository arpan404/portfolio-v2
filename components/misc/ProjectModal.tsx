"use client";

import useGlobalStore from "@/state";
import projectList, { PROJECT_DETAIL, TECH } from "@/utils/projectList";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import {
  FaCode,
  FaNodeJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
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
    <TbBrandReactNative
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
export default function ProjectModal() {
  const router = useRouter();
  const currentProject = useGlobalStore((state) => state.currentProject);
  const setCurrentProject = useGlobalStore((state) => state.setCurrentProject);
  const currentProjectParams = useSearchParams();
  const currentProjectSlug = currentProjectParams.get("project");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentProjectDetail, setCurrentProjectDetail] =
    useState<PROJECT_DETAIL | null>(null);
  const isInitialLoad = useRef(true);
  const handleClose = () => {
    const params = new URLSearchParams(currentProjectParams.toString());
    params.delete("project");
    router.replace(`/`, { scroll: false });
    setCurrentProject(null);
    setModalOpen(false);
    document.body.style.overflowY = "scroll";
  };
  const handleOpen = (currentProject: string) => {
    setCurrentProjectDetail(
      projectList.filter(
        (project: PROJECT_DETAIL) => project.slug === currentProject
      )[0]
    );
    console.log(currentProject);
    document.body.style.overflowY = "hidden";
    setModalOpen(true);
  };
  useEffect(() => {
    if (currentProject) {
      if (!modalOpen) handleOpen(currentProject);
    } else if (isInitialLoad.current) {
      isInitialLoad.current = false;
      if (currentProjectSlug && isValidProjectSlug(currentProjectSlug)) {
        setCurrentProject(currentProjectSlug);
        if (!modalOpen) handleOpen(currentProjectSlug);
      }
    }
  }, [currentProject, handleOpen, handleClose, setCurrentProject]);
  const isValidProjectSlug = (slug: string): boolean => {
    return projectList.some((project: PROJECT_DETAIL) => project.slug === slug);
  };

  return (
    <>
      <Suspense>
        <Modal
          isOpen={modalOpen}
          onRequestClose={handleClose}
          className="bg-[#003366] w-full max-w-[700px] overflow-y-scroll rounded-[20px] z-[10000] outline-none select-none"
          ariaHideApp={false}
        >
          <div className="w-full">
            <div className="w-full h-fit relative">
              <div
                className="rounded-full absolute bg-[#003366] hover:bg-[#32587f] p-2 right-3 top-2 cursor-pointer transition-all ease-linear delay-100"
                onClick={handleClose}
              >
                <RxCross2 className="text-gray-200 text-2xl" />
              </div>
              <Image
                src={currentProjectDetail?.thumbnail!}
                width={700}
                height={700}
                alt={currentProjectDetail?.name + "'s cover image"}
                priority={true}
              ></Image>
              <div className="absolute h-[60px] bottom-[0px] w-full bg-gradient-to-b from-transparent to-[#003366] opacity-100 ">
                <div className="flex pl-4 gap-3 relative sm:-top-[30px] items-center">
                  {currentProjectDetail?.liveLink && (
                    <>
                      <Link
                        href={currentProjectDetail?.liveLink}
                        target="_blank"
                      >
                        <button className="bg-gray-200 hover:bg-gray-50 sm:h-[45px] h-[35px] px-4 sm:px-6 text-md sm:text-lg font-medium rounded-md transition-all ease-out delay-75 drop-shadow-lg">
                          View Project
                        </button>
                      </Link>
                    </>
                  )}
                  {currentProjectDetail?.codeLink && (
                    <Link href={currentProjectDetail?.codeLink} target="_blank">
                      <button
                        className="rounded-full border-2 border-gray-200 hover:border-gray-50 p-1 text-gray-300 hover:text-gray-50 "
                        title="View Source Code"
                      >
                        <FaCode className="sm:text-2xl text-xl  transition-all ease-out delay-75 drop-shadow-2xl" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="px-2 sm:px-4 sm:relative sm:-top-[30px] pb-4">
              <h2 className="text-3xl font-semibold text-gray-100 ">
                {currentProjectDetail?.name}
              </h2>
              <h3 className="text-md font-normal text-gray-300">
                {currentProjectDetail?.description}
              </h3>
              <div className="pt-4">
                <h2 className="text-xl font-medium text-gray-200">
                  Technologies
                </h2>
                <div className="flex gap-2 items-center">
                  {currentProjectDetail?.tech.map((tech) => technologies[tech])}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Suspense>
    </>
  );
}
