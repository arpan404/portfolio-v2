"use client";
import { ChangeEvent, useState } from "react";
import SkillsCard from "../buttons/SkillsCard";
import skillsList from "@/utils/skillsList";
import "./SkillsTab.css";
import { LiaChevronDownSolid } from "react-icons/lia";
type SELECTED = "all" | "language" | "framework" | "db" | "other" | "tools";
const data = {
  all: "All Tools & Tech",
  language: "Programming Languages",
  framework: "Frameworks",
  db: "Databases",
  tools: "Tools",
  other: "Other",
};
export default function SkillsTab() {
  const [selected, setSelected] = useState<SELECTED>("language");
  const handleClick = (event: ChangeEvent<HTMLSelectElement>) => {
    const keyArrays = Object.keys(data);
    const selectedOption = keyArrays[event.target.selectedIndex];
    setSelected(selectedOption as SELECTED);
  };
  return (
    <div className="bg-[#003366] px-2 py-0 rounded-2xl h-[300px] md:h-[320px] lg:h-[440px] w-full md:w-[308px] lg:w-[440px]">
      <div className="pt-4 pb-3 px-2">
        <span className="text-lg text-neutral-300 w-full flex justify-center select-none">
          {data[selected]}
        </span>
        <span className="flex w-full justify-center">
          <span className="p-1 hover:cursor-pointer rounded-full hover:bg-[#11508e] active:bg-[#4788ca] transition-all ease-in duration-200 hover:duration-300 hover:text-neutral-100 text-neutral-200 relative">
            <LiaChevronDownSolid className="text-xl" />
            <select
              className="absolute top-0 left-0 opacity-0 rounded-full outline-none cursor-pointer w-[28px] h-[28px]"
              onChange={handleClick}
              defaultValue={"Programming Language"}
            >
              <option label="All Tools & Tech">All Tools & Tech</option>
              <option label="Programming Language">Programming Language</option>
              <option label="Frameworks">Frameworks</option>
              <option label="Databases">Databases</option>
              <option label="Tools">Tools</option>
              <option label="Other">Other</option>
            </select>
          </span>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 overflow-y-scroll pr-4 px-2 custom_scroll max-h-[calc(100%-105px)]">
        {skillsList.map((skill, index) => {
          if (selected === "all") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          } else if (selected === "language" && skill.type === "language") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          } else if (selected === "framework" && skill.type === "framework") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          } else if (selected === "db" && skill.type === "db") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          } else if (selected === "tools" && skill.type === "tool") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          } else if (selected === "other" && skill.type === "other") {
            return (
              <SkillsCard
                key={index}
                name={skill.name}
                experience={skill.experience}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
