import { MathComponent } from "mathjax-react";
import InputValue from "../Input/Input";
import TableButton from "./TableButton";
import DialogComponent from "../Dialog/DIalog";
import { useState } from "react";
import PropTypes from "prop-types";

const ChangeInDemandAndSupplyTable = ({ getAllValue }) => {
  const [values, setValues] = useState({
    QD_A_OLD: null,
    QD_B_OLD: null,
    QD_A_NEW: null,
    QD_B_NEW: null,
    QS_A_OLD: null,
    QS_B_OLD: null,
    QS_A_NEW: null,
    QS_B_NEW: null,
  });

  const valueChangeHandler = (key, event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: parseFloat(event.target.value.replace(",", ".")),
    }));
  };

  const transferAllInputValueFunctionHandler = () => {
    getAllValue(values);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="w-full border-[2px] border-[#4cb0af] rounded-md h-full p-5">
      <div className="overflow-x-scroll rounded-md">
        <table className="table text-black border-none dark:text-slate-300">
          <tbody className="flex flex-wrap items-center justify-center">
            {/* row 1 */}
            <tr className="flex">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qd(old) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={(event) => valueChangeHandler("QD_A_OLD", event)} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={(event) => valueChangeHandler("QD_B_OLD", event)} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
            <tr className="flex">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qd(new) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={(event) => valueChangeHandler("QD_A_NEW", event)} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={(event) => valueChangeHandler("QD_B_NEW", event)} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
            <tr className="flex justify-around">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qs(old) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={(event) => valueChangeHandler("QS_A_OLD", event)} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={(event) => valueChangeHandler("QS_B_OLD", event)} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
            <tr className="flex justify-around">
              <th>
                {" "}
                <MathComponent tex={String.raw` Qs(new) = `} />
              </th>
              <td className="flex gap-x-2">
                {" "}
                <div className="w-[80px]">
                  <InputValue placeholder={"a"} onChange={(event) => valueChangeHandler("QS_A_NEW", event)} />
                </div>
                <div className="w-[80px] flex items-center gap-x-2">
                  <InputValue placeholder={"b"} onChange={(event) => valueChangeHandler("QS_B_NEW", event)} />
                  <MathComponent tex={String.raw`p`} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TableButton onclick={transferAllInputValueFunctionHandler} />
      <DialogComponent />
    </div>
  );
};

ChangeInDemandAndSupplyTable.propTypes = {
  getAllValue: PropTypes.func,
};

export default ChangeInDemandAndSupplyTable;
