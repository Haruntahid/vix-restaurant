import PropTypes from "prop-types";

function Table({ product, handleRemoveItem, index }) {
  const { name, time, calories } = product;

  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="bg-[#2828280D] border-b border-[#0BE58A] text-center">
            <td>{index + 1}</td>
            <td className="w-[40%] text-start">{name}</td>
            <td className="w-[20%]">{time}</td>
            <td className="w-[20%]">{calories}</td>
            <td className="w-[20%]">
              <button
                onClick={() => handleRemoveItem(product)}
                className="px-3 lg:px-5 py-2 lg:py-3 bg-[#0BE58A] rounded-full"
              >
                Preparing
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  product: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  index: PropTypes.number,
};

export default Table;
