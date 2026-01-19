import Header from "@/components/Header";
import { WeatherCard, WeatherDetailsCard } from "@/components/Card";
import CardHourlyForest from "@/components/CardHourlyForest";
import { WeeklyForest } from "@/components/WeeklyForest";
import { useWeatherData } from "@/hooks/useWeatherData";
import { useState } from "react";

function Home() {
  const [city, setCity] = useState("Bogota");
  const { hourlyData, weatherCard, weatherDetails, weekDays, loading, error } =
    useWeatherData(city);
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen">
        <div className="text-center bg-red-500/10 p-6 rounded-lg">
          <h2 className="text-red-500 font-bold text-xl mb-2">Error</h2>
          <p className="text-muted-foreground">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!weatherCard) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <Header title="Weather App" date="monday, 16 2026" setCity={setCity} />
      <div className="grid grid-cols lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherCard weatherCard={weatherCard} />
          <CardHourlyForest hourlyData={hourlyData} />
          <WeatherDetailsCard weatherDetails={weatherDetails} />
        </div>
        <div className="space-y-6">
          <WeeklyForest weekDays={weekDays} />
        </div>
      </div>
    </div>
  );
}
export default Home;
