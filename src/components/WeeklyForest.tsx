import { WEATHER_ICON_MAP } from "@/constants/weatherIcons";
import type { WeeklyForecastDay } from "@/types/weather.types";
import { Sun } from "lucide-react";

type WeekDayProps = {
  weekDays: WeeklyForecastDay[];
};

export function WeeklyForest({ weekDays }: Readonly<WeekDayProps>) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10">
      <div className="text-sm text-left font-medium text-muted-foreground uppercase tracking-wide">
        WEEKLY FORECAST
      </div>
      <div className="mt-6 space-y-4">
        {weekDays.map(({ day, icon, high, low }) => {
          const IconComponent = WEATHER_ICON_MAP[icon] || Sun;
          return (
            <div key={day} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{day}</span>
              <IconComponent className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">
                {low}° / {high}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
