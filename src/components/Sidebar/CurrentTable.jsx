import PropTypes from "prop-types";

function CurrentTable({ product }) {
  const { name, time, calories } = product;
  return (
    <>
      <table className="table">
        <tbody>
          <tr className="">
            <th></th>
            <td>{name}</td>
            <td>{time}</td>
            <td>{calories}</td>
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
