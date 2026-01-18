import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Wind,
  Eye,
  Droplet,
  Gauge,
} from "lucide-react";
import type { WeatherDetailIcon, WeatherIcon } from "@/types/weather.types";

// Mapeo de íconos del clima - DRY Principle (Don't Repeat Yourself)
export const WEATHER_ICON_MAP: Record<WeatherIcon, typeof Sun> = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
} as const;

// Mapeo de iconos del detalle del clima
export const WEATHER_DETAILS_ICON_MAP: Record<WeatherDetailIcon, typeof Wind> =
  {
    wind: Wind,
    eye: Eye,
    droplet: Droplet,
    gauge: Gauge,
  };
