import Sidebar from "../Sidebar/Sidebar";
import RecipeCart from "./RecipeCart";
import PropTypes from "prop-types";

function Recipe({
  recipes,
  handelWantToCook,
  wantToCook,
  handleRemoveItem,
  item,
  totalTime,
  totalCalories,
}) {
  return (
    <>
      <div className="mt-24">
        <h1 className="text-4xl text-center text-[#150B2B] font-semibold">
          Our Recipes
        </h1>
        <p className="text-center text-[#150B2BB3] mt-6 mb-12">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
          elementum mauris aenean neque.
        </p>

        <div className="flex gap-8">
          <div className="w-3/5 grid grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <RecipeCart
                key={recipe.id}
                recipe={recipe}
                handelWantToCook={handelWantToCook}
              />
            ))}
          </div>
          <div className="w-2/5">
            <Sidebar
              wantToCook={wantToCook}
              handleRemoveItem={handleRemoveItem}
              item={item}
              totalTime={totalTime}
              totalCalories={totalCalories}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.array,
  handelWantToCook: PropTypes.func,
  wantToCook: PropTypes.array,
  count: PropTypes.number,
  handleRemoveItem: PropTypes.func,
  item: PropTypes.array,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Recipe;
