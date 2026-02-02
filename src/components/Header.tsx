import { LocationSearch } from "./LocationSearch";
import { Star } from "lucide-react";

type HeaderProps = Readonly<{
  title: string;
  date: string;
  setCity: (city: string) => void;
  onOpenFavorites?: () => void;
}>;

function Header({ title, date, setCity, onOpenFavorites }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <div className="flex-1 md:w-80">
          <LocationSearch onSearch={(location) => setCity(location)} />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={onOpenFavorites}
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <Star className="h-4 w-4 text-amber-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
