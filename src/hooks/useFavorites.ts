import { useState, useEffect } from "react";
import type { Favorite } from "@/types/favorite-types";

const STORAGE_KEY = "weatherFavoriteCities";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Error parsing favorites from localStorage", error);
        setFavorites([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city: string, country?: string) => {
    const exists = favorites.some(
      (fav) => fav.city.toLowerCase() === city.toLowerCase(),
    );
    if (exists) {
      return { success: false, message: "City is already in favorites." };
    }
    const newFavorite: Favorite = {
      city,
      country: country || "",
      addedAt: new Date(),
    };
    setFavorites([...favorites, newFavorite]);
    return { success: true, message: "City added to favorites." };
  };
  const removeFavorite = (city: string) => {
    setFavorites(
      favorites.filter((fav) => fav.city.toLowerCase() !== city.toLowerCase()),
    );
  };

  const isFavorite = (city: string) => {
    return favorites.some(
      (fav) => fav.city.toLowerCase() === city.toLowerCase(),
    );
  };
  const clearFavorites = () => {
    setFavorites([]);
  };
  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites,
  };
}
