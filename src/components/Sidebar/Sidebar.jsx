import PropTypes from "prop-types";
import Table from "./Table";
import CurrentTable from "./CurrentTable";

function Sidebar({ wantToCook, handleRemoveItem, item, totalTime }) {
  return (
    <div className="border border-[#28282833]">
      <h1 className="font-semibold text-2xl text-center mt-8">
        Want to cook: {wantToCook.length}
      </h1>
      <div className="divider w-4/5 mx-auto"></div>

      {wantToCook.map((product) => (
        <Table
          key={product.id}
          product={product}
          wantToCook={wantToCook}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <h1 className="font-semibold text-2xl text-center mt-8">
        Currently cooking: {item.length}
        {item.map((product) => (
          <CurrentTable key={product.id} product={product} />
        ))}
      </h1>
      <div className="divider w-4/5 mx-auto"></div>
      <p>Total time : {totalTime}</p>
      <p>Total Calories :</p>
    </div>
  );
}

Sidebar.propTypes = {
  wantToCook: PropTypes.array,
  item: PropTypes.array,
  handleRemoveItem: PropTypes.func,
  totalTime: PropTypes.number,
};

export default Sidebar;
