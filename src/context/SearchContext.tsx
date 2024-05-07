import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ISearchContext {
  searchValue: string;
  setSearchValue(searchValue: string): void;
  handleSearch(value: string): void;
}

const SearchContext = createContext({} as ISearchContext);

export default function SearchProvider({ children }: PropsWithChildren) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value: string) {
    setSearchValue(value);
  }
  const value: ISearchContext = {
    searchValue,
    handleSearch,
    setSearchValue,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
export function useSearchContext() {
  return useContext(SearchContext);
}
