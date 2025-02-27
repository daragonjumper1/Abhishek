
import React from "react";

interface HobbyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[rgba(61,141,117,1)] flex w-full items-center gap-[15px] overflow-hidden mt-3 px-3.5 py-3 rounded-[14px] border-[rgba(255,255,255,0.5)] border-solid border-2">
      <div className="self-stretch flex flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
        <div className="bg-white gap-0.5 text-black pl-2 pr-[7px] py-0.5 rounded-[37.975px]">
          {title}
        </div>
        <div className="text-white mt-2 whitespace-pre-line">{description}</div>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="aspect-[1.49] object-contain w-[127px] self-stretch shrink-0 my-auto rounded-[9px]"
      />
    </div>
  );
};

export default HobbyCard;
