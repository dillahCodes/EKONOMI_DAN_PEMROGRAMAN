import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import TableCrossPriceElasticity from "../components/Table/TableCrossPriceElasticity";
import { MathComponent } from "mathjax-react";
import { ForYourInfoCrossElascityIndo, CrossElascityInfoNumber, ForYourInfoCrossElascityEng } from "../components/NumberElasticity/Cros_Elascity_info";
import RulesComponent from "../components/Rules/Rules";

const CrossPriceElasticity = () => {
  const [ALL_VALUE, SET_ALL_VALUE] = useState();

  let PRICE_Y1, PRICE_Y2, QUANTITY_X1, QUANTITY_X2;

  if (ALL_VALUE !== undefined) {
    ({ PRICE_Y1, PRICE_Y2, QUANTITY_X1, QUANTITY_X2 } = ALL_VALUE);
  }

  let Finnal_Result = (QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1 / ((PRICE_Y2 - PRICE_Y1) / PRICE_Y1);
  // VARIABLE FOR VERIFICATION
  const variablesToCheck = [PRICE_Y1, PRICE_Y2, QUANTITY_X1, QUANTITY_X2];
  return (
    <div className="flex items-center  pt-24   flex-col gap-y-5 min-h-screen   justify-between w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
      <h1 className="px-3 my-5 text-xl text-center text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Cross Price Elasticity of demand (Elastisitas permintaan Silang)</h1>
      <div className="w-full  p-5 gap-y-5 flex mb-10 flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb] dark:bg-gray-700 shadow-md dark:shadow-black">
        {/* Isi komponen di sini */}
        <TableCrossPriceElasticity getAllValue={SET_ALL_VALUE} />
        {variablesToCheck.every((variable) => variable !== undefined && variable !== null) ? (
          <>
            <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
              <span className="font-bold capitalize font-Kanit">method :</span>
              <div className=" border-[2px] rounded-md border-[#4cb0af] p-2 my-3 overflow-x-scroll">
                <MathComponent
                  tex={String.raw`Ec =
            \frac
            {
              \frac{\Delta Qx}{Qx}
            }
            {
              \frac{\Delta Py}{Py}
            }
            =
            \frac
            {
              \frac
              {(Qx2 - Qx1)}
              {Qx1}
            }
            {
              \frac
              {(Py2 - Py1)}
              {Py1}
            }
            `}
                />
                <div className="flex flex-wrap items-center gap-x-2">
                  <MathComponent
                    tex={String.raw`Ec =
            \frac
            {
              \frac{\Delta Qx}{Qx}
            }
            {
              \frac{\Delta Py}{Py}
            }
            =
            \frac
            {
              \frac
              {(${QUANTITY_X2} - ${QUANTITY_X1})}
              {${QUANTITY_X1}}
            }
            {
              \frac
              {(${PRICE_Y2} - ${PRICE_Y1})}
              {${PRICE_Y1}}
            }
            =
            \frac
            {
              \frac
              {(${QUANTITY_X2 - QUANTITY_X1})}
              {${QUANTITY_X1}}
            }
            {
              \frac
              {(${PRICE_Y2 - PRICE_Y1})}
              {${PRICE_Y1}}
            }
            =
            \frac
            {
              ${(QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1}
            }
            {
              
              ${(PRICE_Y2 - PRICE_Y1) / PRICE_Y1}
            }
            =
              ${(QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1 / ((PRICE_Y2 - PRICE_Y1) / PRICE_Y1)}
            `}
                  />
                  <CrossElascityInfoNumber number={Finnal_Result} />
                </div>
              </div>
            </div>
            <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll ">
              <ForYourInfoCrossElascityIndo number={Finnal_Result} />
            </div>
            <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll ">
              <ForYourInfoCrossElascityEng number={Finnal_Result} />
            </div>
          </>
        ) : (
          <>
            <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
              <span className="font-bold capitalize font-Kanit">method :</span>
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CrossPriceElasticity;
