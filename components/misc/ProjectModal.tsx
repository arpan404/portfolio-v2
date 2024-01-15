"use client";

import useGlobalStore from "@/state";
import projectList, { PROJECT_DETAIL } from "@/utils/projectList";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaCode } from "react-icons/fa";

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
                        <button className="bg-gray-200 hover:bg-gray-50 h-[45px] px-6 text-lg font-medium rounded-md transition-all ease-out delay-75 drop-shadow-lg">
                          View Project
                        </button>
                      </Link>
                    </>
                  )}
                  {currentProjectDetail?.codeLink && (
                    <Link href={currentProjectDetail?.codeLink} target="_blank">
                      <button
                        className="rounded-full border-2 border-gray-300 hover:border-gray-50 p-1 text-gray-300 hover:text-gray-50 "
                        title="View Source Code"
                      >
                        <FaCode className="text-2xl  transition-all ease-out delay-75 drop-shadow-lg" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
            <div>{currentProjectDetail?.description}</div>
          </div>
        </Modal>
      </Suspense>
    </>
  );
}
