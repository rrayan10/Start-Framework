import { Star } from "lucide-react";

interface StarDividerProps {
  title: string;
  variant?: "light" | "dark";
}

const StarDivider = ({ title, variant = "light" }: StarDividerProps) => {
  const textColor = variant === "light" ? "text-hero-foreground" : "text-secondary";
  const lineColor = variant === "light" ? "bg-hero-foreground" : "bg-secondary";
  const starColor = variant === "light" ? "text-hero-foreground" : "text-secondary";

  return (
    <div className="text-center pt-4">
      <h2 className={`uppercase mb-3 text-4xl font-extrabold ${textColor}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center mb-3">
        <div className={`h-[2px] w-16 mr-3 ${lineColor}`} />
        <Star className={`w-5 h-5 ${starColor}`} />
        <div className={`h-[2px] w-16 ml-3 ${lineColor}`} />
      </div>
    </div>
  );
};

export default StarDivider;
