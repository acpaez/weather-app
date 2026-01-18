import { LocationSearch } from "./LocationSearch";

function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Weather App</h1>
          <p className="text-sm text-muted-foreground">
            Monday, january 11, 2025
          </p>
        </div>
        <div className="w-full md:w-80">
          <LocationSearch
            onSearch={(location) => console.log("Searching for:", location)}
          />
        </div>
      </div>
    </header>
  );
}
export default Header;