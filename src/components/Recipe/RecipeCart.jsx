import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
import PropTypes from "prop-types";

function RecipeCart({ recipe, handelWantToCook }) {
  const { name, description, ingredients, time, calories, image } = recipe;
  return (
    <>
      <div className="card p-6 bg-base-100 border border-[#28282833]">
        <figure>
          <img
            className="rounded-3xl h-72 object-cover w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="text-xl text-[#282828] mt-6 mb-4">{name}</h2>
          <p className="text-[#878787]">{description}</p>
          <div className="divider"></div>
          <p>Ingredients: {ingredients.length}</p>
          <ul className="ml-5 mt-4">
            {ingredients
              .map((pd, index) => (
                <li key={index} className="text-[#878787] text-[18px]">
                  {pd}
                </li>
              ))
              .slice(0, 3)}
          </ul>
          <div className="divider"></div>
          <div className="flex gap-5">
            <p className="inline-flex gap-2 items-center text-[18px]">
              <IoMdTime className="text-gray" />
              <span>{time}</span>
            </p>
            <p className="inline-flex gap-2 items-center text-[18px]">
              <RiFireLine className="text-gray" />
              <span>{calories}</span>
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => handelWantToCook(recipe)}
              className="text-[#150B2B] text-[18px] font-medium bg-[#0BE58A] px-6 py-3 rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

RecipeCart.propTypes = {
  recipe: PropTypes.object,
  handelWantToCook: PropTypes.func,
};

export default RecipeCart;
