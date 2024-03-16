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
      <div className="mt-12 lg:mt-24">
        <h1 className="text-3xl lg:text-4xl text-center text-[#150B2B] font-semibold">
          Our Recipes
        </h1>
        <p className="text-center text-[#150B2BB3] text-[16px] lg:text-xl mt-3 lg:mt-6 mb-6 lg:mb-12">
          Explore our tantalizing recipes, crafted for every palate and
          occasion. From quick meals <br /> to gourmet delights, discover
          culinary inspiration at your fingertips.
        </p>

        <div className="flex gap-8 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <RecipeCart
                key={recipe.id}
                recipe={recipe}
                handelWantToCook={handelWantToCook}
              />
            ))}
          </div>
          <div className="w-full lg:w-2/5">
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
  handleRemoveItem: PropTypes.func,
  item: PropTypes.array,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Recipe;
