import { MathComponent } from "mathjax-react";
import InputValue from "../Input/Input";
import TableButton from "./TableButton";
import DialogComponent from "../Dialog/DIalog";
import { useState } from "react";
import PropTypes from "prop-types";

const ChangeInSupplyTable = ({ getAllValue }) => {
  const [QD_A, SET_QD_A] = useState();
  const [QD_B, SET_QD_B] = useState();
  const [QS_A_OLD, SET_QS_A_OLD] = useState();
  const [QS_B_OLD, SET_QS_B_OLD] = useState();
    const [QS_A_NEW, SET_QS_A_NEW] = useState();
    const [QS_B_NEW, SET_QS_B_NEW] = useState();
  const QD_A_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QD_A(event.target.value);
  };
  const QD_B_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QD_B(event.target.value);
  };
  const QS_A_OLD_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QS_A_OLD(event.target.value);
  };
  const QS_B_OLD_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QS_B_OLD(event.target.value);
  };
  const QS_A_NEW_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QS_A_NEW(event.target.value);
  };
  const QS_B_NEW_GET_VALUE_FUNCTION_HANDLER = (event) => {
    SET_QS_B_NEW(event.target.value);
  };

  const TRANSFER_ALL_INPUT_VALUE_FUNCTION_HANDLER = () => {
    getAllValue([{ QD_A: QD_A }, { QD_B: QD_B }, { QS_A_OLD: QS_A_OLD }, { QS_B_OLD: QS_B_OLD },{QS_A_NEW:QS_A_NEW},{QS_B_NEW:QS_B_NEW}]);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="w-full border-[2px] border-[#4cb0af] rounded-md h-full  p-5">
      {" "}
      <div className="overflow-x-scroll rounded-md">
        <table className="table text-black border-none dark:text-slate-300">
          <tbody className="flex flex-wrap items-center justify-center ">
            {/* row 1 */}
            <tr className="flex">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qd = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={QD_A_GET_VALUE_FUNCTION_HANDLER} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={QD_B_GET_VALUE_FUNCTION_HANDLER} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
            <tr className="flex justify-around ">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qs(old) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={QS_A_OLD_GET_VALUE_FUNCTION_HANDLER} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={QS_B_OLD_GET_VALUE_FUNCTION_HANDLER} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
            <tr className="flex justify-around ">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qs(new) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={QS_A_NEW_GET_VALUE_FUNCTION_HANDLER} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={QS_B_NEW_GET_VALUE_FUNCTION_HANDLER} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TableButton onclick={TRANSFER_ALL_INPUT_VALUE_FUNCTION_HANDLER} />
      <DialogComponent />
    </div>
  );
};
ChangeInSupplyTable.propTypes = {
  getAllValue: PropTypes.func,
};

export default ChangeInSupplyTable;
