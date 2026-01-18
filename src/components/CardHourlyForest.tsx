import { Cloud, Sun, CloudRain, CloudSnow } from "lucide-react";

type CardHourlyForestProps = {
  icon: "sun" | "cloud" | "rain" | "snow";
};

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
};

function CardHourlyForest({ icon }: CardHourlyForestProps) {
  const IconComponent = iconMap[icon] || Sun;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10">
      <div className="text-sm text-left font-medium text-muted-foreground uppercase tracking-wide">
        HOURLY FOREST
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide mt-6">
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          <span className="text-sm text-muted-foreground">Now</span>
          <IconComponent className="h-6 w-6 text-primary" />
          <span className="text-foreground font-medium">55°</span>
        </div>
      </div>
    </div>
  );
}
export default CardHourlyForest;
