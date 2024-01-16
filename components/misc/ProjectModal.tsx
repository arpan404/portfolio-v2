"use client";

import useGlobalStore from "@/state";
import projectList, { PROJECT_DETAIL } from "@/utils/projectList";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
import technologies from "@/utils/technologies";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
    setModalOpen(false);
    const params = new URLSearchParams(currentProjectParams.toString());
    params.delete("project");
    router.replace(`/`, { scroll: false });
    setCurrentProject(null);
  };
  const handleOpen = (currentProject: string) => {
    setCurrentProjectDetail(
      projectList.filter(
        (project: PROJECT_DETAIL) => project.slug === currentProject
      )[0]
    );
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
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className="flex justify-center items-center overflow-y-scroll"
      >
        <Box
          style={{ maxHeight: "100dvh" }}
          className="select-none px-[10px] sm:px-[20px] overflow-y-scroll outline-none py-[20px]"
        >
          <div className="bg-[#003366] w-full max-w-[700px] overflow-y-scroll rounded-[20px] z-[10000] outline-none select-none max-h-fit">
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
                className="sm:max-h-[394px] max-h-[300px]"
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
                <div className="flex gap-3 items-center pt-1 flex-wrap">
                  {currentProjectDetail?.tech.map((tech, index) => (
                    <span key={index}>{technologies[tech]}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
