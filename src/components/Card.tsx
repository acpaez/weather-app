import { Sun, Wind } from "lucide-react";
import {
  WEATHER_DETAILS_ICON_MAP,
  WEATHER_ICON_MAP,
} from "@/constants/weatherIcons";
import type { WeatherCardProps, WeatherDetail } from "@/types/weather.types";

type CardProps = {
  weatherCard: WeatherCardProps;
};

export function WeatherCard({ weatherCard }: Readonly<CardProps>) {
  const IconComponent = WEATHER_ICON_MAP[weatherCard.icon] || Sun;
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10 relative">
      <div className=" gap-4 text-sm text-muted-foreground">
        <div className="absolute top-4 right-4">
          <IconComponent size={48} className="text-foreground/50" />
        </div>
        <div className="text-left text-muted-foreground text-sm font-medium">
          {weatherCard.location || "Unknown Location"}
        </div>
        <div className="text-left text-6xl font-light mt-2 text-foreground">
          {weatherCard.temperature}°
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
        <span className="text-gray-400 text-base">H: {weatherCard.high}°</span>
        <span className="text-gray-400 text-base">L: {weatherCard.low}°</span>
        <span className="text-gray-400 text-base">
          Sensacion termica: {weatherCard.feelsLike}°
        </span>
      </div>
    </div>
  );
}

interface WeatherDetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export function WeatherDetailCard({
  icon,
  label,
  value,
}: Readonly<WeatherDetailCardProps>) {
  const IconComponent = WEATHER_DETAILS_ICON_MAP[icon] || Wind;
  return (
    <div className="w-full flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg shadow-md">
      <div className="text-primary">
        <IconComponent size={24} className="text-primary" />
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-foreground font-medium text-lg">{value}</div>
    </div>
  );
}

type WeatherDetailsCardProps = {
  weatherDetails: WeatherDetail[];
};

export function WeatherDetailsCard({
  weatherDetails,
}: Readonly<WeatherDetailsCardProps>) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10 grid grid-cols-2 gap-4">
      {weatherDetails.map(({ icon, label, value }) => (
        <WeatherDetailCard
          key={label}
          icon={icon}
          label={label}
          value={value}
        />
      ))}
    </div>
  );
}
