
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        white: "bg-[rgba(235,235,235,1)] text-black rounded-[38px] px-3 py-1",
        green: "bg-[rgba(0,94,66,1)] text-white rounded-[38px] px-3 py-1",
        purple: "bg-[#AF52DE] text-white rounded-[38px] px-3 py-1",
        custom: "rounded-[38px] px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  bgColor?: string;
}

function Badge({ className, variant, bgColor, ...props }: BadgeProps) {
  const style: React.CSSProperties = {};
  
  if (bgColor) {
    style.backgroundColor = bgColor;
  }
  
  return (
    <div 
      className={cn(badgeVariants({ variant }), className)} 
      style={style}
      {...props} 
    />
  );
}

export { Badge, badgeVariants };
