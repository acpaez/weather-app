import { useState, useEffect } from "react";
import type {
  HourlyForecastData,
  WeatherCardProps,
  WeatherDetail,
  WeeklyForecastDay,
} from "@/types/weather.types";
import { getCurrentWeather, getForecast } from "@/services/weatherApi";

export function useWeatherData(city: string = "Bogota") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hourlyData, setHourlyData] = useState<HourlyForecastData[]>([]);
  const [weatherCard, setWeatherCard] = useState<WeatherCardProps | null>(null);
  const [weekDays, setWeekDays] = useState<WeeklyForecastDay[]>([]);
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetail[]>([]);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setError(null);
        setLoading(true);
        const current = await getCurrentWeather(city);
        setWeatherCard({
          icon: current.icon,
          location: current.location,
          temperature: current.temperature,
          low: current.low,
          high: current.high,
          feelsLike: current.feelsLike,
        });
        setWeatherDetails([
          { label: "Wind", value: `${current.windSpeed} km/h`, icon: "wind" },
          { label: "Humidity", value: `${current.humidity}%`, icon: "droplet" },
          {
            label: "Visibility",
            value: `${current.visibility} km`,
            icon: "eye",
          },
          {
            label: "Pressure",
            value: `${current.pressure} hPa`,
            icon: "gauge",
          },
        ]);

        const forecast = await getForecast(city);

        const hourly = forecast.slice(0, 8).map((item) => ({
          time: item.time,
          icon: item.icon,
          temp: item.temp,
        }));

        setHourlyData(hourly);

        const dailyMap = new Map<string, (typeof forecast)[0][]>();

        forecast.forEach((item) => {
          const day = item.date.toLocaleDateString("en-US", {
            weekday: "long",
          });
          if (!dailyMap.has(day)) {
            dailyMap.set(day, []);
          }
          dailyMap.get(day)!.push(item);
        });

        const days: WeeklyForecastDay[] = [];

        dailyMap.forEach((items, day) => {
          const temps = items.map((i) => i.temp);
          const high = Math.max(...temps);
          const low = Math.min(...temps);
          const icon = items[0].icon;
          const condition = items[0].icon;

          days.push({
            day,
            icon,
            high,
            low,
            condition,
          });
        });

        setWeekDays(days);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
        console.error("Error fetching weather", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();
  }, [city]);

  return { weatherDetails, weekDays, hourlyData, weatherCard, loading, error };
}
