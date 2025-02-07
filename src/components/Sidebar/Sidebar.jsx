import PropTypes from "prop-types";
import Table from "./Table";
import CurrentTable from "./CurrentTable";

function Sidebar({
  wantToCook,
  handleRemoveItem,
  item,
  totalTime,
  totalCalories,
}) {
  return (
    <div className="border border-[#28282833] rounded-3xl">
      <h1 className="font-semibold text-2xl text-center mt-8">
        Want to cook: {wantToCook.length}
      </h1>
      <div className="divider w-4/5 mx-auto"></div>

      {wantToCook.length > 0 && (
        <table className="table">
          <tbody>
            <tr className="">
              <th></th>
              <td className="w-[23%] lg:w-[37%] text-start">Name</td>
              <td className="w-[20%] text-center">Time</td>
              <td className="w-[20%]">Calories</td>
              <td className="w-1/4"></td>
            </tr>
          </tbody>
        </table>
      )}

      {wantToCook.map((product, index) => (
        <Table
          key={product.id}
          product={product}
          wantToCook={wantToCook}
          handleRemoveItem={handleRemoveItem}
          index={index}
        />
      ))}
      <h1 className="font-semibold text-2xl text-center mt-8">
        Currently cooking: {item.length}
      </h1>
      <div className="divider w-4/5 mx-auto"></div>
      {item.length > 0 && (
        <table className="table">
          <tbody>
            <tr className="">
              <td className=""></td>
              <td className="w-2/4">Name</td>
              <td className="w-1/4 text-center">Time</td>
              <td className="w-1/4 text-center">Calories</td>
            </tr>
          </tbody>
        </table>
      )}
      {item.map((product, index) => (
        <CurrentTable key={product.id} product={product} index={index} />
      ))}

      {item.length > 0 && (
        <div>
          <div className="divider w-4/5 mx-auto"></div>
          <div className="flex p-8 flex-col items-end">
            <p>Total time : {totalTime} minutes</p>
            <p>Total Calories : {totalCalories} calories</p>
          </div>
        </div>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  wantToCook: PropTypes.array,
  item: PropTypes.array,
  handleRemoveItem: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
  count: PropTypes.number,
};

export default Sidebar;
