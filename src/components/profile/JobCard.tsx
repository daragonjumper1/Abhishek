
import React from "react";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  company: string;
  description: string;
  badges: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline" | "white" | "green" | "purple" | "custom";
    bgColor?: string;
  }[];
  isLast?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  description,
  badges,
  isLast = false,
}) => {
  return (
    <div
      className={`flex gap-3 mt-3 pb-[7px] ${!isLast ? "border-[rgba(0,0,0,0.5)] border-b" : ""}`}
    >
      <div className="w-[193px]">
        <div className="text-black text-[19px] tracking-[-0.38px]">
          {company}
        </div>
        <div className="text-black text-[13px] leading-[18px] whitespace-pre-line">
          {description}
        </div>
      </div>
      <div className="flex flex-col text-[15px] text-white">
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.variant} bgColor={badge.bgColor}>
            {badge.text}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
