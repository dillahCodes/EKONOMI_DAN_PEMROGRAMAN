import InputValue from "../Input/Input";
import TableButton from "./TableButton";
import DialogComponent from "../Dialog/DIalog";
import { useState } from "react";
import PropTypes from "prop-types";

const TableIncomeElasticityOfDemand = ({ getAllValue }) => {
  const [ALL_VALUE, SET_ALL_VALUE] = useState({
    PRICE_1: null,
    PRICE_2: null,
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
            <th>income (Pendapatan)</th>
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
                <InputValue placeholder={"price 1"} onChange={(event) => ONCHANGE_VALUE_HANDLER("PRICE_1", event)} />
              </div>
            </td>
            {/* quantity Qd */}
            <td>
              {" "}
              <div className="w-[full]">
                <InputValue placeholder={"Quantity 1"} onChange={(event) => ONCHANGE_VALUE_HANDLER("QUANTITY_X1", event)} />
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
                <InputValue placeholder={"price 2"} onChange={(event) => ONCHANGE_VALUE_HANDLER("PRICE_2", event)} />
              </div>
            </td>
            {/* quantity 2 */}
            <td>
              <div className="w-[full]">
                <InputValue placeholder={"Quantity 2"} onChange={(event) => ONCHANGE_VALUE_HANDLER("QUANTITY_X2", event)} />
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
TableIncomeElasticityOfDemand.propTypes = {
  getAllValue: PropTypes.func,
};

export default TableIncomeElasticityOfDemand;
