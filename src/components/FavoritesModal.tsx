import { X } from "lucide-react";
import type { Favorite } from "@/types/favorite-types"; // ✅


interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Favorite[];
  onSelect: (city: string) => void;
  onRemove: (city: string) => void;
  onAddCurrent: () => void;
  currentCity: string;
  isCurrentFavorite: boolean;
}

export function FavoritesModal({
  isOpen,
  onClose,
  favorites,
  onSelect,
  onRemove,
  onAddCurrent,
  currentCity,
  isCurrentFavorite,
}: FavoritesModalProps) {
  if (!isOpen) return null;

  return (
    // Overlay (fondo oscuro)
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevenir que el click cierre el modal
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">My Favorite Cities</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Lista de favoritos */}
        {favorites.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p>No favorite cities yet</p>
            <p className="text-sm mt-2">Add your first favorite below!</p>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            {favorites.map((favorite) => (
              <div
                key={favorite.city}
                className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-white font-medium">{favorite.city}</p>
                  {favorite.country && (
                    <p className="text-gray-400 text-sm">{favorite.country}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  {/* Botón Select */}
                  <button
                    onClick={() => {
                      onSelect(favorite.city);
                      onClose();
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
                  >
                    Select
                  </button>

                  {/* Botón Delete */}
                  <button
                    onClick={() => onRemove(favorite.city)}
                    className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botón para agregar ciudad actual */}
        <button
          onClick={() => {
            onAddCurrent();
          }}
          disabled={isCurrentFavorite}
          className={`w-full py-3 rounded-md font-medium transition-colors ${
            isCurrentFavorite
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-500"
          }`}
        >
          {isCurrentFavorite
            ? `${currentCity} is already a favorite`
            : `+ Add ${currentCity} to Favorites`}
        </button>
      </div>
    </div>
  );
}
