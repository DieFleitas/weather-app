import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    return;
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
