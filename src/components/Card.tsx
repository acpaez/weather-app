import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Eye, Gauge } from "lucide-react";

type CardProps = {
  icon: "sun" | "cloud" | "rain" | "snow";
  location?: string;
  temperature?: number;
  high?: number;
  low?: number;
  feelsLike?: number;
};

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
};

export function WeatherCard({
  icon,
  location,
  temperature,
  high,
  low,
  feelsLike,
}: CardProps) {
  const IconComponent = iconMap[icon] || Sun;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10 relative">
      <div className=" gap-4 text-sm text-muted-foreground">
        <div className="absolute top-4 right-4">
          <IconComponent size={48} className="text-foreground/50" />
        </div>
        <div className="text-left text-muted-foreground text-sm font-medium">
          {location || "San Francisco, CA"}
        </div>
        <div className="text-left text-6xl font-light mt-2 text-foreground">
          {temperature !== undefined ? `${temperature}°` : "72°"}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
        <span className="text-gray-400 text-base">H: {high}°</span>
        <span className="text-gray-400 text-base">L: {low}°</span>
        <span className="text-gray-400 text-base">
          Sensacion termica: {feelsLike}°
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
}: WeatherDetailCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg shadow-md">
      <div className="text-primary">{icon}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-foreground font-medium text-lg">{value}</div>
    </div>
  );
}

export function WeatherDetailsCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white/5 p-6 mt-10 grid grid-cols-2 gap-4">
      <WeatherDetailCard
        icon={<Wind size={24} className="text-primary" />}
        label="Wind"
        value="12 km/h"
      />
      <WeatherDetailCard
        icon={<Droplets size={24} className="text-primary" />}
        label="Humidity"
        value="65%"
      />
      <WeatherDetailCard
        icon={<Eye size={24} className="text-primary" />}
        label="Visibility"
        value="10 km"
      />
      <WeatherDetailCard
        icon={<Gauge size={24} className="text-primary" />}
        label="Pressure"
        value="1013 hPa"
      />
      </div>
  );
}