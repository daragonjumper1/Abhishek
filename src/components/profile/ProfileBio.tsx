import React from "react";

interface ProfileBioProps {
  highlightedName: string;
  bioText: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({
  highlightedName,
  bioText,
}) => {
  return (
    <section className="text-white text-[19px] text-center">
      <span className="text-[rgba(175,82,222,1)]">{highlightedName}</span>{" "}
      {bioText}
    </section>
  );
};

export default ProfileBio;


