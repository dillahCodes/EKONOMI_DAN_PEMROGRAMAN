import { useState } from "react";
import InputMarketEquilibrium from "../components/InputMarketEquilibrium";
import Navbar from "../components/Navbar";
import RulesComponent from "../components/Rules";
import { MathComponent } from "mathjax-react";
import { Footer } from "../components/Footer";

const MarketEquilibriumPage = () => {
  const [valuesFromInput, setValuesFromInput] = useState();

  const reciveAllValuesFromInputHandler = (event) => {
    setValuesFromInput(event);
  };

  let Qd_A;
  let Qd_B;
  let Qs_A;
  let Qs_B;
  // Membuat ekspresi reguler untuk mendeteksi tanda koma (,) di dalam string
  var regex = /[,]/;
  var regex2 = /[-]/;
  if (valuesFromInput !== undefined) {
    Qd_A = parseFloat(valuesFromInput[0].Qd.A);
    regex.test(valuesFromInput[0].Qd.B ? (Qd_B = -parseFloat(valuesFromInput[0].Qd.B.replace(",", "."))) : (Qd_B = -valuesFromInput[0].Qd.B));
    regex2.test(valuesFromInput[1].Qs.A ? (Qs_A = -parseFloat(valuesFromInput[1].Qs.A)) : (Qs_A = -valuesFromInput[1].Qs.A));
    regex.test(valuesFromInput[1].Qs.B ? (Qs_B = parseFloat(valuesFromInput[1].Qs.B.replace(",", "."))) : (Qs_B = valuesFromInput[1].Qs.B));
  }
  let Final_P = `${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}`;
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-y-5 justify-center w-full  text-black dark:text-slate-300 p-5 pt-10 mt-16 bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="text-xl text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Market Equilibrium (Keseimbangan Pasar) 1.0</h1>
        <span className="text-xl sm:text-lg md:text-xl font-Oswald">(without curves)</span>
        <div className="w-full  p-5 gap-y-5 flex flex-col md:w-[80%] overflow-x-scroll lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black">
          <InputMarketEquilibrium exportAllValue={reciveAllValuesFromInputHandler} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <div className="font-bold capitalize font-Kanit">result :</div>
            {!Qd_A || !Qd_B || !Qs_A || !Qs_B ? (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            ) : (
              <>
                {" "}
                <MathComponent tex={String.raw` P = ${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}`} />
                <MathComponent tex={String.raw`Qs = ${Qs_A + Qs_B * Final_P}`} />
                <MathComponent tex={String.raw`Qd = ${Qd_A + Qd_B * Final_P}`} />
              </>
            )}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll ">
            <span className="font-bold capitalize font-Kanit">method: </span>
            <div className={`flex flex-col gap-y-5 ${!Qd_A || !Qd_B || !Qs_A || !Qs_B ? "hidden" : ""}`}>
              <div className="p-2 border border-[#4cb0af] rounded">
                <div>
                  <MathComponent tex={String.raw`Qd = Qs`} />
                  <MathComponent tex={String.raw`${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                  <MathComponent tex={String.raw`${Qd_A} ${Math.abs(Qs_A) > 0 ? "+" : ""} ${Math.abs(Qs_A)} = ${Math.abs(Qd_B)}P ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                  <MathComponent tex={String.raw`${Qd_A + Math.abs(Qs_A)} = ${Math.abs(Qd_B) + Qs_B}P`} />
                  <MathComponent tex={String.raw` P = ${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}`} />
                </div>
                <div className={` w-full text-sm ml-10`}>
                  <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P`} />
                  <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}(${Final_P})`} />
                  <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B * Final_P}`} />
                  <MathComponent tex={String.raw`Qd = ${Qd_A + Qd_B * Final_P}`} />
                </div>
                <div className={` w-full text-sm ml-10`}>
                  <MathComponent tex={String.raw`Qs = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                  <MathComponent tex={String.raw`Qs = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}(${Final_P})`} />
                  <MathComponent tex={String.raw`Qs = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B * Final_P}`} />
                  <MathComponent tex={String.raw`Qs = ${Qs_A + Qs_B * Final_P}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketEquilibriumPage;
