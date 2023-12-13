import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
import ThemeToggle from "./components/ThemeToggle";
const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
