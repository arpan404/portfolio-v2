"use client";
import projectList, { PROJECT_DETAIL } from "@/utils/projectList";
import ProjectThumbnail from "./ProjectThumbnail";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useGlobalStore from "@/state";

export default function Projects() {
  const [isMore, setMore] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const setCurrentProject = useGlobalStore((state) => state.setCurrentProject);
  const handleProjectClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("project", slug);
    router.push(`/?project=${slug}`, { scroll: false });
    setCurrentProject(slug);
  };
  return (
    <div className="w-full md:py-10 py-8">
      <div className="flex justify-center w-full">
        <div>
          <h2 className="sm:text-6xl text-5xl text-gray-50">
            What <span className="text-[#ff8e00]">I</span> made?
          </h2>
          <h3 className="text-gray-300">
            Pretty much, but still more to create.
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 flex gap-4 flex-wrap max-w-[940px] w-fit justify-center lg:justify-start">
          {projectList.map((project: PROJECT_DETAIL, index: number) => {
            if (isMore) {
              return (
                <ProjectThumbnail
                  key={index}
                  thumbnail={project.thumbnail}
                  name={project.name}
                  description={project.shortDescription}
                  handleProjectClick={() => handleProjectClick(project.slug)}
                />
              );
            }
            if (!isMore && index < 6) {
              return (
                <ProjectThumbnail
                  key={index}
                  thumbnail={project.thumbnail}
                  name={project.name}
                  description={project.shortDescription}
                  handleProjectClick={() => handleProjectClick(project.slug)}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="text-gray-300 text-sm font-medium hover:text-gray-100 transition-all ease-in delay-100 py-4"
          onClick={() => setMore(!isMore)}
        >
          Show {!isMore ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
}
