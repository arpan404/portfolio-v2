import Image from "next/image";

type PROPS = {
  thumbnail: string;
  name: string;
  description: string;
};
export default function ProjectThumbnail({
  thumbnail,
  name,
  description,
}: PROPS) {
  return (
    <div className="h-[240px] w-[300px] bg-[#003366] rounded-2xl select-none cursor-pointer">
      <div className="p-2 w-full">
        <Image
          src={thumbnail}
          height={500}
          width={500}
          alt=""
          className="max-w-full rounded-xl"
          draggable={false}
        />
      </div>
      <div className="px-3">
        <h2 className="font-bold text-gray-200 text-xl hover:text-gray-100">{name}</h2>
        <h3 className="font-semibold text-gray-400 text-sm">{description}</h3>
      </div>
    </div>
  );
}
