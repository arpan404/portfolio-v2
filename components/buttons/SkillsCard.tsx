export default function SkillsCard({
  name,
  experience,
}: {
  name: string;
  experience: string;
}) {
  return (
    <button
      className={`overflow-hidden relative w-fit text-neutral-300 rounded-md text-sm ${
        name.length > 5 ? "px-7" : name.length!==1?"px-10":"px-12"
      } py-2 font-normal cursor-pointer z-10 group border-[#165ea5] border-[1px] hover:border-[rgba(0,0,0,0)] select-none`}
    >
      {name}
      <span className="absolute w-[200%] h-60 -top-20 -left-10 bg-[#ff8e00] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-[900] origin-left"></span>
      <span className="absolute w-[200%] h-60 -top-20 -left-10 bg-[#fd7702] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-[200%] h-60 -top-20 -left-10 bg-[#ff5003] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-[900] duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-0 left-0 z-10 text-[0.65rem] flex justify-center w-full h-full items-center group-hover:text-neutral-100">
        {experience}
      </span>
    </button>
  );
}
