import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import "./index.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [item, setItem] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handelWantToCook = (recipe) => {
    const isExist = wantToCook.find((rcp) => rcp.id == recipe.id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
      toast.success("Added Want to Cook");
    } else {
      toast.error("already exist");
    }
  };

  const displayItemOnCurrentCooking = (recipe) => {
    setItem([...item, recipe]);
    toast.success("Added to Currently cooking");
  };

  const handleRemoveItem = (product) => {
    const remainingItems = wantToCook.filter((item) => item.id !== product.id);
    setWantToCook(remainingItems);
    displayItemOnCurrentCooking(product);
    setTotalTime(totalTime + product.time);
    setTotalCalories(totalCalories + product.calories);
  };

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
        <Recipe
          recipes={recipes}
          handelWantToCook={handelWantToCook}
          wantToCook={wantToCook}
          handleRemoveItem={handleRemoveItem}
          item={item}
          totalTime={totalTime}
          totalCalories={totalCalories}
        />
      </div>
    </>
  );
}

export default App;
