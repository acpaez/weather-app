import Header from "@/components/Header";
import { WeatherCard, WeatherDetailsCard } from "@/components/Card";
import CardHourlyForest from "@/components/CardHourlyForest";
import { WeeklyForest } from "@/components/WeeklyForest";
import { useWeatherData } from "@/hooks/useWeatherData";

function Home() {
  const { hourlyData, weatherCard, weatherDetails, weekDays } =
    useWeatherData();
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <Header title="Weather App" date="monday, 16 2026, Bogota" />
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
