


import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";
import TechSpecs from "./TechSpecs";
import LanguageCard from "./LanguageCard";
import DyslexicCard from "./DyslexicCard";
import WorkExperience from "./WorkExperience";
import HobbiesSection from "./HobbiesSection";

const ProfileCard: React.FC = () => {
  const techSpecsData = [
    { label: "Age", value: "28 yrs" },
    { label: "Location", value: "Bangalore, India" },
    { label: "Education", value: "B.Tech, CSE" },
  ];

  const languagesData = [
    { name: "English", level: "Advance" },
    { name: "Hindi", level: "Native" },
    { name: "Bengali", level: "Novice" },
    { name: "Nepali", level: "Novice" },
  ];

  const jobsData = [
    {
      company: "KPMG",
      description:
        "> Developed PAPM and OCPM, teaching and implementing process mining concepts.\n\n> Won and advanced in the Innovate X Challenge, demonstrating innovation and expertise.\n\n> Created and pitched client proposals, showcasing strategic thinking and business acumen",
      badges: [
        { text: "Consulting", variant: "custom" as const, bgColor: "rgba(0,94,66,1)" },
        { text: "Assistant Manager", variant: "default" as const },
        { text: "Permanent", variant: "white" as const },
        { text: "2021-Present", variant: "outline" as const },
      ],
    },
    {
      company: "Protiviti India Member Firm",
      description:
        "> Responsible for delivering multiple domestic and international Process Mining projects using Celonis.\n\n> Part of both Data Engineering & Data Analysis process in Celonis\n\n> Responsible for providing various Custom Web Application\n\n> Chatbot development using Node.js and Dialogflow\n\n> Responsible for Automation Bot Development using UiPath",
      badges: [
        { text: "Consulting", variant: "purple" as const },
        { text: "Consultant", variant: "default" as const },
        { text: "Permanent", variant: "white" as const },
        { text: "2019-2021", variant: "outline" as const },
      ],
    },
  ];

  const hobbiesData = [
    {
      title: "Custom Keyboard",
      description:
        "Your fingers deserve better—go custom.\n\nKeyboard: Gas67 (Lavender)\nSwitches: AKKO Lavender Purple\nKeycaps: XDA 9009 Retro",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/6144cbd7e88d4a629c8fd57b9e6418e6/a15652362154e471df015d7ec8b1470a5258b0715e69f009b5d49883eb3b261d?placeholderIfAbsent=true",
    },
    {
      title: "Custom PC",
      description:
        "Crafting performance, one component at a time\n\nCPU: Ryzen 5 3600\nGPU: Radeon RX 6750 X",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/6144cbd7e88d4a629c8fd57b9e6418e6/45fedf1b2cc2baf6f3c3ffe5afd06e29231885dbbc1249dd120fa962f5764e85?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="bg-black flex items-center gap-2.5 font-normal mx-auto">
      <div className="self-stretch w-[404px] my-auto">
        <div className="flex min-h-[983px] w-full flex-col items-stretch gap-5">
          <ProfileHeader
            name="Abhishek Chaturvedi"
            title="Process Mining"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/6144cbd7e88d4a629c8fd57b9e6418e6/f112d8df2a74cba5bf224705e894694844592d426298088b64872613066bcd29?placeholderIfAbsent=true"
          />

          <ProfileBio
            highlightedName="Hey, I'm Abhishek!"
            bioText="I'm passionate about process mining, automation. I love designing innovative solutions and continuously learning new things. Let's collaborate on something exciting!"
          />

          <div className="w-full flex flex-col gap-5">
            <TechSpecs items={techSpecsData} />

            <div className="flex min-h-[182px] w-full items-stretch">
              <LanguageCard languages={languagesData} />
              <DyslexicCard />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <WorkExperience jobs={jobsData} />
        </div>
        <div className="mt-5">
          <HobbiesSection hobbies={hobbiesData} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
