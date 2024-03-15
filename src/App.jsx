import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import "./index.css";
import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Banner />
        <Recipe recipes={recipes} />
      </div>
    </>
  );
}

export default App;
