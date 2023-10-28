import InputValue from "../Input/Input";
import TableButton from "./TableButton";
import DialogComponent from "../Dialog/DIalog";
import { useState } from "react";
import PropTypes from "prop-types";

const TableCrossPriceElasticity = ({ getAllValue }) => {
  const [ALL_VALUE, SET_ALL_VALUE] = useState({
    PRICE_Y1: null,
    PRICE_Y2: null,
    QUANTITY_X1: null,
    QUANTITY_X2: null,
  });
  const ONCHANGE_VALUE_HANDLER = (key, event) => {
    SET_ALL_VALUE((prevValue) => ({ ...prevValue, [key]: parseFloat(event.target.value.replace(",", ".")) }));
  };
  const TRANSFER_ALL_INPUT_VALUE_FUNCTION_HANDLER = () => {
    getAllValue(ALL_VALUE);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="p-5 overflow-x-scroll md:overflow-hidden border-[2px] border-[#4cb0af] rounded-lg">
      <table className="table">
        {/* head */}
        <thead className="text-black dark:text-slate-300">
          <tr>
            <th></th>
            <th>
              Price of Product &ldquo;Y&rdquo; <br /> (harga produk &ldquo;Y&rdquo;)
            </th>
            <th>
              Demand for product &ldquo;X&rdquo;
              <br /> (permintaan product &ldquo;X&rdquo;)
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              {/* price 1 */}
              <div className="w-[full]">
                <InputValue placeholder={"price Y1"} onChange={(event) => ONCHANGE_VALUE_HANDLER("PRICE_Y1", event)} />
              </div>
            </td>
            {/* quantity Qd */}
            <td>
              {" "}
              <div className="w-[full]">
                <InputValue placeholder={"Quantity X1"} onChange={(event) => ONCHANGE_VALUE_HANDLER("QUANTITY_X1", event)} />
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            {/* price 2 */}
            <td>
              {" "}
              <div className="w-[full]">
                <InputValue placeholder={"price Y2"} onChange={(event) => ONCHANGE_VALUE_HANDLER("PRICE_Y2", event)} />
              </div>
            </td>
            {/* quantity 2 */}
            <td>
              <div className="w-[full]">
                <InputValue placeholder={"Quantity X2"} onChange={(event) => ONCHANGE_VALUE_HANDLER("QUANTITY_X2", event)} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <TableButton onclick={TRANSFER_ALL_INPUT_VALUE_FUNCTION_HANDLER} />
      <DialogComponent />
    </div>
  );
};
TableCrossPriceElasticity.propTypes = {
  getAllValue: PropTypes.func,
};

export default TableCrossPriceElasticity;
