import SearchProvider from "./context/SearchContext";
import { AddressPage } from "./pages/AddressPage";

function App() {
  return (
    <>
      <SearchProvider>
        <AddressPage />
      </SearchProvider>
    </>
  );
}

export default App;
