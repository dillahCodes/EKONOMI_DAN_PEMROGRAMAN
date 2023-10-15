import PropTypes from "prop-types";
import InputValue from "./Input";
import { useState } from "react";
import TableButton from "./TableButton";

const TableComponent = (props) => {
  const { tableFor, allValues } = props;
  const [price1, setPrice1] = useState();
  const [quantity1, setQuantity1] = useState();
  const [price2, setPrice2] = useState();
  const [quantity2, setQuantity2] = useState();
  const price1OnchangeHandler = (event) => {
    setPrice1(event.target.value);
  };
  const quantity1OnchangeHandler = (event) => {
    setQuantity1(event.target.value);
  };
  const price2OnchangeHandler = (event) => {
    setPrice2(event.target.value);
  };
  const quantity2OnchangeHandler = (event) => {
    setQuantity2(event.target.value);
  };

  const getAllValueHandler = () => {
    // Mengumpulkan semua nilai dan mengirimkannya ke komponen lain
    allValues({
      price1: parseFloat(price1),
      quantity1: parseFloat(quantity1),
      price2: parseFloat(price2),
      quantity2: parseFloat(quantity2),
    });

    // open pesan
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="p-5 overflow-x-scroll md:overflow-hidden border-[2px] border-[#4cb0af] rounded-lg text-black dark:text-slate-300">
      <table className="table ">
        {/* head */}
        <thead className="text-black dark:text-slate-300">
          <tr>
            <th></th>
            <th>price (harga)</th>
            <th>{tableFor}</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              {/* price 1 */}
              <InputValue onChange={price1OnchangeHandler} placeholder={"price 1"} />
            </td>
            {/* quantity 1 */}
            <td>
              {" "}
              <InputValue onChange={quantity1OnchangeHandler} placeholder={"quantity 1"} />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            {/* price 2 */}
            <td>
              {" "}
              <InputValue onChange={price2OnchangeHandler} placeholder={"price 2"} />
            </td>
            {/* quantity 2 */}
            <td>
              <InputValue onChange={quantity2OnchangeHandler} placeholder={"quantity 2"} />
            </td>
          </tr>
        </tbody>
      </table>
      <TableButton onclick={getAllValueHandler} />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="mb-3 text-xl font-bold text-[#4cb0af] font-Kanit">⚠️Hello user!</h3>

          <div className="text-sm font-bold capitalize">
            <p className="text-red-500 ">*jika jawaban tidak sesuai atau error laporkan melalui instagram saya</p>
            <p className="text-red-500">*If your answers do not match or error report it through my Instagram</p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn dark:shadow-black  hover:text-black hover:bg-[#ebebeb] dark:text-slate-300 bg-[#4cb0af] text-[#F5F5F5] dark:hover:text-slate-500">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
TableComponent.propTypes = {
  tableFor: PropTypes.string,
  allValues: PropTypes.func,
};
export default TableComponent;
