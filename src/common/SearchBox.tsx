import { useSearchContext } from "../context/SearchContext";

interface Props {
  value: string;
  onChange(value: string): void;
}
function SearchBox() {
  const { searchValue, handleSearch } = useSearchContext();
  return (
    <div className="p-3">
      <input
        className="input input-bordered w-full"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
