import Header from "@/components/Header";
import { WeatherCard, WeatherDetailsCard } from "@/components/Card";
import CardHourlyForest from "@/components/CardHourlyForest";
import { WeeklyForecast } from "@/components/WeaklyForestcast";

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <Header />
      <div className="grid grid-cols lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherCard
            icon="sun"
            location="Bogota"
            temperature={25}
            low={24}
            high={32}
            feelsLike={20}
          />
          <CardHourlyForest />
          <WeatherDetailsCard />
        </div>
        <div className="space-y-6">
          <WeeklyForecast />
        </div>
      </div>
    </div>
  );
}
export default Home;
