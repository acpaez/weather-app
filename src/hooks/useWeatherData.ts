import { useState } from "react";
import type {
  HourlyForecastData,
  WeatherCardProps,
  WeatherDetail,
  WeeklyForecastDay,
} from "@/types/weather.types";

export function useWeatherData() {
  const [hourlyData, setHourlyData] = useState<HourlyForecastData[]>([
    { time: "Now", icon: "sun", temp: 55 },
    { time: "1 AM", icon: "cloud", temp: 53 },
    { time: "2 AM", icon: "rain", temp: 51 },
    { time: "3 AM", icon: "snow", temp: 50 },
    { time: "4 AM", icon: "sun", temp: 48 },
    { time: "5 AM", icon: "cloud", temp: 47 },
    { time: "6 AM", icon: "rain", temp: 46 },
    { time: "7 AM", icon: "snow", temp: 45 },
  ]);

  const [weatherCard, setWeatherCard] = useState<WeatherCardProps>({
    icon: "sun",
    location: "Bogota",
    temperature: 25,
    low: 24,
    high: 32,
    feelsLike: 20,
  });
  const [weekDays, setWeekDays] = useState<WeeklyForecastDay[]>([
    { day: "Monday", icon: "sun", high: 30, low: 20, condition: "Sunny" },
    { day: "Tuesday", icon: "cloud", high: 28, low: 18, condition: "Cloudy" },
    { day: "Wednesday", icon: "rain", high: 25, low: 17, condition: "Rainy" },
    { day: "Thursday", icon: "rain", high: 27, low: 19, condition: "Showers" },
    {
      day: "Friday",
      icon: "cloud",
      high: 26,
      low: 18,
      condition: "Partly Cloudy",
    },
    { day: "Saturday", icon: "sun", high: 24, low: 16, condition: "Sunny" },
    { day: "Sunday", icon: "sun", high: 29, low: 21, condition: "Clear" },
  ]);

  const [weatherDetails, setWeatherDetails] = useState<WeatherDetail[]>([
    {
      label: "Wind",
      value: "12 km/h",
      icon: "wind",
    },
    {
      label: "Humidity",
      value: "78%",
      icon: "droplet",
    },
    {
      label: "Visibility",
      value: "10 km",
      icon: "eye",
    },
    {
      label: "Pressure",
      value: "1015 hPa",
      icon: "gauge",
    },
  ]);

  return { weatherDetails, weekDays, hourlyData, weatherCard };
}
