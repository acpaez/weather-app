// Tipo para los íconos del clima
export type WeatherIcon = "sun" | "cloud" | "rain" | "snow";

export type WeatherDetailIcon = "wind" | "droplet" | "eye" | "gauge";

// Props para el componente de clima semanal
export interface WeeklyForecastDay {
  day: string;
  icon: WeatherIcon;
  high: number;
  low: number;
  condition: string;
}

// Props para datos horarios
export interface HourlyForecastData {
  time: string;
  icon: WeatherIcon;
  temp: number;
}

// Props para detalles del clima
export interface WeatherDetail {
  label: string;
  value: string | number;
  icon: WeatherDetailIcon;
}

// Props para la tarjeta de clima principal
export interface WeatherCardProps {
  icon: WeatherIcon;
  location: string;
  temperature: number;
  low: number;
  high: number;
  feelsLike: number;
}
