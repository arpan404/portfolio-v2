import Image from "next/image";

type PROPS = {
  thumbnail: string;
  name: string;
  description: string;
  handleProjectClick: () => void;
};
export default function ProjectThumbnail({
  thumbnail,
  name,
  description,
  handleProjectClick,
}: PROPS) {
  return (
    <div className="h-[240px] w-[300px] bg-[#003366] rounded-2xl select-none cursor-default">
      <div className="p-2 w-full">
        <Image
          src={thumbnail}
          width={700}
          height={700}
          alt={name + "'s logo"}
          className="max-w-full rounded-xl cursor-pointer max-h-[160px]"
          draggable={false}
          priority={true}
          onClick={handleProjectClick}
        />
      </div>
      <div className="px-3">
        <h2
          className="font-bold text-gray-200 text-xl hover:text-gray-100 cursor-pointer"
          onClick={handleProjectClick}
        >
          {name}
        </h2>
        <h3 className="font-semibold text-gray-400 text-sm cursor-default">
          {description}
        </h3>
      </div>
    </div>
  );
}
