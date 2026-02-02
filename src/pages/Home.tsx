import Header from "@/components/Header";
import { WeatherCard, WeatherDetailsCard } from "@/components/Card";
import CardHourlyForest from "@/components/CardHourlyForest";
import { WeeklyForest } from "@/components/WeeklyForest";
import { useWeatherData } from "@/hooks/useWeatherData";
import { useState } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useFavorites } from "@/hooks/useFavorites";
import { FavoritesModal } from "@/components/FavoritesModal";

function Home() {
  const [city, setCity] = useState("Bogota");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const {
    location,
    cityName,
    error: geoError,
    loading: geoLoading,
  } = useGeolocation();
  const selectedCity = city;

  const { hourlyData, weatherCard, weatherDetails, weekDays, loading, error } =
    useWeatherData(selectedCity);

  const isLoading = loading || geoLoading;
  const isError = error || geoError;

  const handlerAddCurrentToFavorite = () => {
    if (weatherCard) {
      const result = addFavorite(weatherCard.location);
      if (result.success) {
        alert(`${weatherCard.location} added to favorites!`);
      } else {
        alert(result.message);
      }
    }
  };

  const handleSelectFavorite = (city: string) => {
    setCity(city);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen">
        <div className="text-center bg-red-500/10 p-6 rounded-lg">
          <h2 className="text-red-500 font-bold text-xl mb-2">Error</h2>
          <p className="text-muted-foreground">{isError}</p>
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
      <Header
        title="Weather App"
        date={new Date().toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        setCity={setCity}
        onOpenFavorites={() => setIsModalOpen(true)}
      />
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

      <FavoritesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        favorites={favorites}
        onSelect={handleSelectFavorite}
        onRemove={removeFavorite}
        onAddCurrent={handlerAddCurrentToFavorite}
        currentCity={weatherCard.location}
        isCurrentFavorite={isFavorite(weatherCard.location)}
      />
    </div>
  );
}
export default Home;
