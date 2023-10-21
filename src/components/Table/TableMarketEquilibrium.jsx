import PropTypes from "prop-types";
import InputValue from "../Input/Input";
import { MathComponent } from "mathjax-react";
import TableButton from "./TableButton";
import { useState } from "react";
import DialogComponent from "../Dialog/DIalog";

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
            <InputValue placeholder={"a"} onChange={QsAonChangeHandler} />
          </div>
          {/* <MathComponent tex={String.raw`+`} /> */}
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
          {/* <MathComponent tex={String.raw`-`} /> */}
          <div className="w-[70px]">
            <InputValue placeholder={"b"} onChange={QdBonChangeHandler} />
          </div>
          <MathComponent tex={String.raw`p`} />
        </div>
      </div>
      <TableButton onclick={exportAllValuesHandler} />
      <DialogComponent />
    </div>
  );
};
InputMarketEquilibrium.propTypes = {
  className: PropTypes.string,
  exportAllValue: PropTypes.func,
};
export default InputMarketEquilibrium;
