import { LocationSearch } from "./LocationSearch";

type HeaderProps = Readonly<{
  title: string;
  date: string;
}>;

function Header({ title, date }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">{date}</p>
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
