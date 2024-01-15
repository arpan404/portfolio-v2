import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MouseEventHandler } from "react";

type PROPS = {
  thumbnail: string;
  name: string;
  description: string;
  slug: string;
};
export default function ProjectThumbnail({
  thumbnail,
  name,
  description,
  slug,
}: PROPS) {
  const searchParams = useSearchParams();
  const handleProjectClick:
    | MouseEventHandler<HTMLImageElement>
    | MouseEventHandler<HTMLHeadingElement> = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("project", slug);
    window.history.pushState(null, "", `?${params.toString()}`);
  };
  return (
    <div className="h-[240px] w-[300px] bg-[#003366] rounded-2xl select-none cursor-default">
      <div className="p-2 w-full">
        <Image
          src={thumbnail}
          height={500}
          width={500}
          alt=""
          className="max-w-full rounded-xl cursor-pointer"
          draggable={false}
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
