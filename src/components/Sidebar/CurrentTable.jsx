import PropTypes from "prop-types";

function CurrentTable({ product }) {
  const { name, time, calories } = product;
  return (
    <>
      <table className="table">
        <tbody>
          <tr className="bg-[#2828280D] border-b border-[#0BE58A] py-6">
            <td className="w-2/4">{name}</td>
            <td className="w-1/4 text-center">{time}</td>
            <td className="w-1/4 text-center">{calories}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

CurrentTable.propTypes = {
  product: PropTypes.object,
};

export default CurrentTable;
