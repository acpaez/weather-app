import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

interface LocationSearchProps {
  readonly onSearch?: (location: string) => void
}

export function LocationSearch({ onSearch }: LocationSearchProps) {
  const [location, setLocation] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(location)
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-full rounded-md border border-gray-300 bg-white/5 py-2 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
      <button
        onClick={handleSearch}
        className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <Search className="h-5 w-5" />
        Search
      </button>
    </form>
  );
}
