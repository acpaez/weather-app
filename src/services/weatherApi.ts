import type { WeatherIcon } from "@/types/weather.types";

interface OpenWeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  visibility: number;
  name: string;
}

interface ForecastResponse {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      id: number;
      main: string;
    }>;
    dt_txt: string;
  }>;
}

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

function kelvinToCelsius(kelvin: number): number {
  return Math.round(kelvin - 273.15);
}

function mapWeatherToIcon(weatherId: number): WeatherIcon {
  if (weatherId >= 600 && weatherId < 700) return "snow";
  if (weatherId >= 500 && weatherId < 600) return "rain";
  if (weatherId >= 300 && weatherId < 400) return "rain";
  if (weatherId >= 200 && weatherId < 300) return "rain";
  if (weatherId >= 801 && weatherId <= 804) return "cloud";
  if (weatherId === 800) return "sun";
  return "cloud";
}

export async function getCurrentWeather(city: string) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const data: OpenWeatherResponse = await response.json();
  return {
    location: data.name,
    temperature: kelvinToCelsius(data.main.temp),
    feelsLike: kelvinToCelsius(data.main.feels_like),
    high: kelvinToCelsius(data.main.temp_max),
    low: kelvinToCelsius(data.main.temp_min),
    icon: mapWeatherToIcon(data.weather[0].id),
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: Math.round(data.wind.speed * 3.6), // m/s a km/h
    visibility: Math.round(data.visibility / 1000), // metros a km
  };
}

export async function getForecast(city: string) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const data: ForecastResponse = await response.json();

  return data.list.map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    }),
    date: new Date(item.dt * 1000),
    temp: kelvinToCelsius(item.main.temp),
    icon: mapWeatherToIcon(item.weather[0].id),
  }));
}
