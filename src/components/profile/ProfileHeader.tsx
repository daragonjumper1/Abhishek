import React from "react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  title,
  imageUrl,
}) => {
  return (
    <header className="items-center border-b-[color:var(--Black-100,#000)] bg-[#30B0C7] flex min-h-[546px] w-full flex-col overflow-hidden text-black pl-[5px] pr-[3px] pt-[57px] pb-[27px] rounded-[18.988px] border-b-[1.519px] border-dashed">
      <h1 className="text-[34px]">{name}</h1>
      <h2 className="text-[19px]">{title}</h2>
      <img
        src={imageUrl}
        alt={`${name} profile`}
        className="aspect-[1] object-contain w-full self-stretch"
      />
    </header>
  );
};

export default ProfileHeader;
