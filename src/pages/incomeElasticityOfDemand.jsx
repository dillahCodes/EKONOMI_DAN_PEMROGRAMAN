import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import TableIncomeElasticityOfDemand from "../components/Table/TableIncomeElasticityOfDemand";
import { MathComponent } from "mathjax-react";
import { InfoNumberIncome } from "../components/NumberElasticity/Number_Income_Elasticity";
import RulesComponent from "../components/Rules/Rules";

const IncomeElasticityOfDemand = () => {
  const [ALL_VALUE, SET_ALL_VALUE] = useState();

  let PRICE_1, PRICE_2, QUANTITY_X1, QUANTITY_X2;
  if (ALL_VALUE !== undefined) {
    ({ PRICE_1, PRICE_2, QUANTITY_X1, QUANTITY_X2 } = ALL_VALUE);
  }

  let Finnal_Result = (QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1 / ((PRICE_2 - PRICE_1) / PRICE_1);

  // VARIABLE FOR VERIFICATION
  const variablesToCheck = [PRICE_1, PRICE_2, QUANTITY_X1, QUANTITY_X2];

  return (
    <div className="flex items-center  pt-24   flex-col gap-y-5 min-h-screen   justify-between w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
      <h1 className="px-3 my-5 text-xl text-center text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">income elasticity of demand (Elastisitas permintaan pendapatan Silang)</h1>
      <div className="w-full  p-5 gap-y-5 flex mb-10 flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb] dark:bg-gray-700 shadow-md dark:shadow-black">
        {/* Isi komponen di sini */}
        <TableIncomeElasticityOfDemand getAllValue={SET_ALL_VALUE} />
        <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
          <span className="font-bold capitalize font-Kanit">method :</span>
          {variablesToCheck.every((variable) => variable !== undefined && variable !== null) ? (
            <>
              <div className="border-[2px] rounded-md border-[#4cb0af] p-2  my-3 overflow-x-scroll">
                <MathComponent
                  tex={String.raw`Ei =
             \frac
             {
                \frac
                {\Delta Q}
                {Q}
             }
             {
                \frac
                {\Delta I}
                {I}
             }
             =
             \frac
             {
               
                \frac
                {(Q2 - Q1)}
                {Q1}
             }
             {
               
                \frac
                {(I2 - I1)}
                {I1}
             }
             =
             \frac 
             {
                \frac
                {(${QUANTITY_X2} - ${QUANTITY_X1})}
                { ${QUANTITY_X1}}
             }
             {
                \frac
                {(${PRICE_2} - ${PRICE_1})}
                {${PRICE_1}}
             }
             =
             \frac
             {
                \frac
                {(${QUANTITY_X2 - QUANTITY_X1})}
                { ${QUANTITY_X1}}
             }
             {
                \frac
                {(${PRICE_2 - PRICE_1})}
                { ${PRICE_1}}
             }
             =
             \frac
             {
                ${(QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1}
             }
             {
                ${(PRICE_2 - PRICE_1) / PRICE_1}
             }
             =
             ${(QUANTITY_X2 - QUANTITY_X1) / QUANTITY_X1 / ((PRICE_2 - PRICE_1) / PRICE_1)}
             `}
                />
              </div>
              <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
                <span className="font-bold text-green-500 capitalize font-Kanit">
                  <InfoNumberIncome ResultNumber={Finnal_Result} />
                </span>
              </div>
            </>
          ) : (
            <>
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IncomeElasticityOfDemand;
