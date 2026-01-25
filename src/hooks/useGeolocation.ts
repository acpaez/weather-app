import { getLatAndLonToCity } from "@/services/weatherApi";
import { useState, useEffect } from "react";

interface GeolocalizacionCoords {
  lat: number;
  lon: number;
}

export function useGeolocation() {
  const [location, setLocation] = useState<GeolocalizacionCoords | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("La geolocalizacion no es soportada por el navegador");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  }, []);

  useEffect(() => {
    if (!location) return;

    async function fetchGeolocation() {
      try {
        const result = await getLatAndLonToCity(
          location.lat.toString(),
          location.lon.toString(),
        );
        if (result.data && result.data.length > 0) {
          const city = result.data[0].name;
          setCityName(city);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
        console.error("Error fetching weather", error);
      }
    }
    fetchGeolocation();
  }, [location]);

  return { location, cityName, error, loading };
}
