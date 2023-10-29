import { useState } from "react";
import { Appcontext } from "./components/context";
import AllRoutes from "./components/routers";
import "./App.css";
function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [view, setView] = useState({});
  console.log("VIE", view);
  console.log("recipes", recipes);

  return (
    <div className="App">
      <Appcontext.Provider
        value={{
          query,
          setQuery,
          search,
          setSearch,
          recipes,
          setRecipes,
          view,
          setView,
        }}
      >
        <AllRoutes />
      </Appcontext.Provider>
    </div>
  );
}

export default App;
