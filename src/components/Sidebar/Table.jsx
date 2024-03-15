import PropTypes from "prop-types";

function Table({ product, handleRemoveItem }) {
  const { name, time, calories } = product;
  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="bg-[#2828280D] border-b border-red-600">
            <th></th>
            <td>1</td>
            <td className="w-2/4">{name}</td>
            <td className="w-1/4">{time}</td>
            <td className="w-1/4">{calories}</td>
            <td>
              <button
                onClick={() => handleRemoveItem(product)}
                className="px-5 py-3 bg-[#0BE58A] rounded-full"
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
};

export default Table;
