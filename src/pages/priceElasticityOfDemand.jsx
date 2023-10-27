import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import TablePriceElasticityOfDemand from "../components/Table/TablePriceElasticityOfDemand";
import { MathComponent } from "mathjax-react";
import NumberElasticityComponent from "../components/NumberElasticity/Number_Elasticity";

const PriceElasticityOfDemand = () => {
  const [ALL_VALUE, SET_ALL_VALUE] = useState();
  let PRICE_1, PRICE_2, QUANTITY_1, QUANTITY_2;
  if (ALL_VALUE !== undefined) {
    PRICE_1 = ALL_VALUE.PRICE_1;
    PRICE_2 = ALL_VALUE.PRICE_2;
    QUANTITY_1 = ALL_VALUE.QUANTITY_1;
    QUANTITY_2 = ALL_VALUE.QUANTITY_2;
  }
  let RESULT_POINT_ELASTICITY = (QUANTITY_2 - QUANTITY_1) / QUANTITY_1 / ((PRICE_2 - PRICE_1) / PRICE_1);
  let Result_Arch_Elasticity = ((QUANTITY_2 - QUANTITY_1) / ((QUANTITY_1 + QUANTITY_2) / 2) / ((PRICE_2 - PRICE_1) / ((PRICE_1 + PRICE_2) / 2))).toFixed(2);
  console.info(Result_Arch_Elasticity);

  return (
    <div className="flex items-center  pt-24   flex-col gap-y-5 min-h-screen   justify-between w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
      <h1 className="px-3 my-5 text-xl text-center text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Elastisitas Harga (Price Elasticity Of Demand)</h1>
      <div className="w-full  p-5 gap-y-5 flex mb-10 flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb] dark:bg-gray-700 shadow-md dark:shadow-black">
        {/* Isi komponen di sini */}
        <TablePriceElasticityOfDemand getAllValue={SET_ALL_VALUE} />
        <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll">
          <span className="font-bold capitalize font-Kanit">result :</span>
        </div>
        <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
          <span className="font-bold capitalize font-Kanit">method :</span>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 mt-2 overflow-x-scroll">
            <span className="text-base font-Kanit">Menggunakan rumus Elastisitas Titik (using Point Elasticity formula)</span>
            <div className="text-[12px]">
              <MathComponent tex={String.raw`Ep = \frac{\Delta Q/Q}{\Delta P/P} = \frac{(Q2 - Q1)/Q1}{(P2 - P1)/P1}`} />
              <div className="flex flex-wrap items-center w-full gap-x-2">
                <div>
                  <MathComponent
                    tex={String.raw`Ep =  \frac{(Q2 - Q1)/Q1}{(P2 - P1)/P1} = \frac{\frac{(${QUANTITY_2} - ${QUANTITY_1})}{${QUANTITY_1}}}{\frac{(${PRICE_2} - ${PRICE_2})}{${PRICE_1}}} = 
                \frac{
                  ${(QUANTITY_2 - QUANTITY_1) / QUANTITY_1}
                }
                {${(PRICE_2 - PRICE_1) / PRICE_1}}
                = ${(QUANTITY_2 - QUANTITY_1) / QUANTITY_1 / ((PRICE_2 - PRICE_1) / PRICE_1)}
                `}
                  />
                </div>
                (<NumberElasticityComponent ResultNumber={RESULT_POINT_ELASTICITY} />)
              </div>
            </div>
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 mt-2 overflow-x-scroll">
            <span className="text-base font-Kanit">Menggunakan rumus Elastisitas Busur (using Arch Elasticity formula).</span>
            <div className="text-[12px]">
              <div className="flex flex-wrap items-center w-full gap-x-2">
                <div>
                  <MathComponent
                    tex={String.raw`Ep = 
              \frac
              {
                \frac
                {
                  \Delta Q
                }
                {
                  \frac{
                    Q1 + Q2
                  }
                  {
                    2
                  }
                }
              }
              {
                \frac
                {
                  \Delta P
                }
                {
                  \frac
                  {
                    P1 + P2
                  }
                  {
                    2
                  }
                }
              }
              =
              \frac
              {
                \frac
                {
                  ${QUANTITY_2} - ${QUANTITY_1}
                }
                {
                  \frac
                  {
                    ${QUANTITY_1} + ${QUANTITY_2}
                  }
                  {
                    2
                  }
                }
              }
              {
                \frac
                {
                  ${PRICE_2} - ${PRICE_1}
                }
                {
                  \frac
                  {
                    ${PRICE_1} + ${PRICE_2}
                  }
                  {
                    2
                  }
                }
              }
              =
              \frac
              {${(QUANTITY_2 - QUANTITY_1) / ((QUANTITY_1 + QUANTITY_2) / 2)}}
              {${(PRICE_2 - PRICE_1) / ((PRICE_1 + PRICE_2) / 2)}}
              =
              ${((QUANTITY_2 - QUANTITY_1) / ((QUANTITY_1 + QUANTITY_2) / 2) / ((PRICE_2 - PRICE_1) / ((PRICE_1 + PRICE_2) / 2))).toFixed(2)}
              `}
                  />
                </div>
                (<NumberElasticityComponent ResultNumber={Result_Arch_Elasticity} />)
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PriceElasticityOfDemand;
