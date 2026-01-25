import { Sun } from "lucide-react";
import { WEATHER_ICON_MAP } from "@/constants/weatherIcons";
import type { HourlyForecastData } from "@/types/weather.types";

type CardHourlyForestProps = {
  hourlyData: HourlyForecastData[];
};

function CardHourlyForest({ hourlyData }: Readonly<CardHourlyForestProps>) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10">
      <div className="text-sm text-left font-medium text-muted-foreground uppercase tracking-wide">
        HOURLY FOREST
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide mt-6">
        {hourlyData.map((hour) => {
          const IconComponent = WEATHER_ICON_MAP[hour.icon] || Sun;
          return (
            <div
              key={`${hour.time}-${hour.temp}`}
              className="flex flex-col items-center gap-2 min-w-[60px]"
            >
              <span className="text-sm text-muted-foreground">{hour.time}</span>
              <IconComponent className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">{hour.temp}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardHourlyForest;
