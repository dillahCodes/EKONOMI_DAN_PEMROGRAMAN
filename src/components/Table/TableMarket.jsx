import PropTypes from "prop-types";
import InputValue from "../Input/Input";
import { useState } from "react";
import TableButton from "./TableButton";
import DialogComponent from "../Dialog/DIalog";

const TableMarketComponent = (props) => {
  const { allValues } = props;
  const [Price1, setPrice1] = useState();
  const [Price2, setPrice2] = useState();
  const [QdQuantity1, setQdQuantity1] = useState();
  const [QdQuantity2, setQdQuantity2] = useState();
  const [QsQuantity1, setQsQuantity1] = useState();
  const [QsQuantity2, setQsQuantity2] = useState();

  const Price1ValueHandler = (event) => {
    setPrice1(event.target.value);
  };
  const Price2ValueHandler = (event) => {
    setPrice2(event.target.value);
  };
  const QdQuantity1ValueHandler = (event) => {
    setQdQuantity1(event.target.value);
  };
  const QdQuantity2ValueHandler = (event) => {
    setQdQuantity2(event.target.value);
  };
  const QsQuantity1ValueHandler = (event) => {
    setQsQuantity1(event.target.value);
  };
  const QsQuantity2ValueHandler = (event) => {
    setQsQuantity2(event.target.value);
  };

  const getAllValueHandler = () => {
    // Mengumpulkan semua nilai dan mengirimkannya ke komponen lain

    allValues([
      { Price1: Price1, Price2: Price2 },
      { Qd1: QdQuantity1, Qd2: QdQuantity2 },
      { Qs1: QsQuantity1, Qs2: QsQuantity2 },
    ]);

    // open pesan
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="p-5 overflow-x-scroll md:overflow-hidden border-[2px] border-[#4cb0af] rounded-lg">
      <table className="table">
        {/* head */}
        <thead className="text-black dark:text-slate-300">
          <tr>
            <th></th>
            <th>price (harga)</th>
            <th>Qd</th>
            <th>Qs</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              {/* price 1 */}
              <div className="w-[150px]">
                <InputValue onChange={Price1ValueHandler} placeholder={"price 1"} />
              </div>
            </td>
            {/* quantity Qd */}
            <td>
              {" "}
              <div className="w-[150px]">
                <InputValue onChange={QdQuantity1ValueHandler} placeholder={"Qd1"} />
              </div>
            </td>
            <td>
              {" "}
              <div className="w-[150px]">
                <InputValue onChange={QsQuantity1ValueHandler} placeholder={"Qs1"} />
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            {/* price 2 */}
            <td>
              {" "}
              <div className="w-[150px]">
                <InputValue onChange={Price2ValueHandler} placeholder={"price 2"} />
              </div>
            </td>
            {/* quantity 2 */}
            <td>
              <div className="w-[150px]">
                <InputValue onChange={QdQuantity2ValueHandler} placeholder={"Qd2"} />
              </div>
            </td>
            <td>
              <div className="w-[150px]">
                <InputValue onChange={QsQuantity2ValueHandler} placeholder={"Qs2"} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <TableButton onclick={getAllValueHandler} />
      <DialogComponent />
    </div>
  );
};
TableMarketComponent.propTypes = {
  allValues: PropTypes.func,
};
export default TableMarketComponent;
