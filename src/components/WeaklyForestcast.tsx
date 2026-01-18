import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Eye,
  Gauge,
} from "lucide-react";

interface WeeklyForecastProps {
  icon: "sun" | "cloud" | "rain" | "snow";
  day: string;
  high: number;
  low: number;
}

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
};

const weekDays = [
  { day: "Monday", icon: "sun", high: 30, low: 20, condition: "Sunny" },
  { day: "Tuesday", icon: "cloud", high: 28, low: 18, condition: "Cloudy" },
  { day: "Wednesday", icon: "rain", high: 25, low: 17, condition: "Rainy" },
  { day: "Thursday", icon: "rain", high: 27, low: 19, condition: "Showers" },
  { day: "Friday", icon: "cloud", high: 26, low: 18, condition: "Partly Cloudy" },
  { day: "Saturday", icon: "sun", high: 24, low: 16, condition: "Sunny" },
  { day: "Sunday", icon: "sun", high: 29, low: 21, condition: "Clear" },
];

export function WeeklyForecast() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10">
        <div className="text-sm text-left font-medium text-muted-foreground uppercase tracking-wide">
            WEEKLY FORECAST
        </div>
      <div className="mt-6 space-y-4">
        {weekDays.map(({ day, icon, high, low }) => {
            const IconComponent = iconMap[icon] || Sun;
            return (
            <div key={day} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{day}</span>
                <IconComponent className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">
                    {low}° / {high}°
                </span>
            </div>
            );
        }
        )}
      </div>
    </div>
  );
}   