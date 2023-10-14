import PropTypes from "prop-types";
import InputValue from "./Input";
import { MathComponent } from "mathjax-react";
import TableButton from "./TableButton";
import { useState } from "react";

const InputMarketEquilibrium = ({ className, exportAllValue }) => {
  const [QsA, setQsA] = useState();
  const [QsB, setQsB] = useState();
  const [QdA, setQdA] = useState();
  const [QdB, setQdB] = useState();

  const QsAonChangeHandler = (event) => {
    setQsA(event.target.value);
  };
  const QsBonChangeHandler = (event) => {
    setQsB(event.target.value);
  };

  const QdAonChangeHandler = (event) => {
    setQdA(event.target.value);
  };
  const QdBonChangeHandler = (event) => {
    setQdB(event.target.value);
  };

  const exportAllValuesHandler = () => {
    exportAllValue([{ Qd: { A: QdA, B: QdB } }, { Qs: { A: QsA, B: QsB } }]);
    // open pesan
    document.getElementById("my_modal_1").showModal();
  };

  //   console.info([{ Qd: { A: QdA, B: QdB, P: QdP } }, { Qs: { A: QsA, B: QsB, P: QsP } }]);
  return (
    <div className={`${className} border-[2px] rounded-md border-[#4cb0af] p-2 text-black dark:text-slate-300`}>
      <div className="flex flex-col-reverse items-center gap-2 ">
        <div className="flex items-center gap-x-2 ">
          <MathComponent tex={String.raw`Qs = `} />
          <div className="w-[70px]">
            <InputValue placeholder={"-a"} onChange={QsAonChangeHandler} />
          </div>
          <MathComponent tex={String.raw`+`} />
          <div className="w-[70px]">
            <InputValue placeholder={"b"} onChange={QsBonChangeHandler} />
          </div>
          <MathComponent tex={String.raw`p`} />
        </div>
        <div className="flex items-center justify-center w-[70px] font-bold  text-xl translate-x-4">
          <span>=</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MathComponent tex={String.raw`Qd = `} />
          <div className="w-[70px]">
            <InputValue placeholder={"a"} onChange={QdAonChangeHandler} />
          </div>
          <MathComponent tex={String.raw`-`} />
          <div className="w-[70px]">
            <InputValue placeholder={"b"} onChange={QdBonChangeHandler} />
          </div>
          <MathComponent tex={String.raw`p`} />
        </div>
      </div>
      <TableButton onclick={exportAllValuesHandler} />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="mb-3 text-xl font-bold text-[#4cb0af] font-Kanit">⚠️Hello user!</h3>

          <div className="text-sm font-bold capitalize">
            <p className="text-red-500 ">*jika jawaban tidak sesuai atau error laporkan melalui instagram saya</p>
            <p className="text-red-500 ">*(If the answer is not appropriate or has an error, please report it to my Instagram)</p>
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
InputMarketEquilibrium.propTypes = {
  className: PropTypes.string,
  exportAllValue: PropTypes.func,
};
export default InputMarketEquilibrium;
