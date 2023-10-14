import { useState } from "react";
import Navbar from "../components/Navbar";
import TableComponent from "../components/Table";
import RulesComponent from "../components/Rules";
import { MathComponent } from "mathjax-react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { Footer } from "../components/Footer";

const SupllyFunctionPage = () => {
  const [allValues, setAllValues] = useState();
  const getAllValuesFromTableHandler = (values) => {
    setAllValues(values);
  };

  let P1;
  let P2;
  let Q1;
  let Q2;
  // let finalResult;
  if (allValues !== undefined) {
    P1 = allValues.price1;
    P2 = allValues.price2;
    Q1 = allValues.quantity1;
    Q2 = allValues.quantity2;
  }
  let finalPriceIfQ0 = Math.abs(((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)) / ((Q2 - Q1) / (P2 - P1));
  let finalQuantityIfP0 = ((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1);
  const data = [
    { Q: 0, P: finalPriceIfQ0 },
    { Q: finalQuantityIfP0, P: 0 },
  ];

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-y-5 text-black dark:text-slate-300 justify-center w-full   p-5 pt-10 mt-16 bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="text-xl text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">suplly function (fungsi penawaran)</h1>
        <div className="w-full p-5 gap-y-5 flex flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black">
          <TableComponent tableFor={"quantity suplly (jumlah penawaran (Qs) )"} allValues={getAllValuesFromTableHandler} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <span className="font-bold capitalize font-Kanit">result :</span>
            {!P1 || !P2 || !Q1 || !Q2 ? <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} /> : <MathComponent tex={String.raw`Qs = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P  `} />}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll">
            {" "}
            <span className="font-bold capitalize font-Kanit">method :</span>
            {!P1 || !P2 || !Q1 || !Q2 ? (
              ""
            ) : (
              <div className="flex flex-col text-xs gap-y-2">
                <div>
                  <MathComponent tex={String.raw`slope = \frac{\Delta Q}{\Delta P} =  \frac{{Q2}-{Q1}}{{P2}-{P1}} = \frac{${Q2} - ${Q1}}{${P2}-${P1}} = \frac{${Q2 - Q1}}{${P2 - P1}} = ${(Q2 - Q1) / (P2 - P1)}`} />
                </div>
                <div>
                  <MathComponent tex={String.raw` \frac{P - P1}{P2 - P1} =  \frac{Q - Q1}{Q2 - Q1} `} />
                  <MathComponent tex={String.raw` \frac{P - ${P1}}{${P2} - ${P1}} =  \frac{Q - ${Q1}}{${Q2} - ${Q1}} `} />
                  <MathComponent tex={String.raw` \frac{P - ${P1}}{${P2 - P1}} =  \frac{Q - ${Q1}}{${Q2 - Q1}} `} />
                  <MathComponent tex={String.raw`${P2 - P1}Q ${(P2 - P1) * -Q1 >= 0 ? "+" : ""} ${(P2 - P1) * -Q1} = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1} `} />
                  <MathComponent tex={String.raw`${P2 - P1}Q  = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1} ${Math.abs((P2 - P1) * -Q1) >= 0 ? "+" : ""} ${Math.abs((P2 - P1) * -Q1)}`} />
                  <MathComponent tex={String.raw`\frac{${P2 - P1}Q  = ${Q2 - Q1}P  ${(Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1) >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)}}{${P2 - P1}}`} />
                  <MathComponent tex={String.raw`Q = ${(Q2 - Q1) / (P2 - P1)}P ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1) >= 0 ? "+" : ""}${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}  `} />
                  <MathComponent tex={String.raw`Qs = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P  `} />
                </div>
                <div className="p-2">
                  <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                  <div className="text-xs">
                    <MathComponent tex={String.raw`Qs =  ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""}  ${(Q2 - Q1) / (P2 - P1)}P`} />
                    <MathComponent tex={String.raw`0 =  ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""}  ${(Q2 - Q1) / (P2 - P1)}P`} />
                    <MathComponent tex={String.raw`${Math.abs(((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1))} =${(Q2 - Q1) / (P2 - P1)}P`} />
                    <MathComponent tex={String.raw`P = \frac{${Math.abs(((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1))}} {${(Q2 - Q1) / (P2 - P1)}}`} />
                    <MathComponent tex={String.raw`P = ${Math.abs(((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)) / ((Q2 - Q1) / (P2 - P1))}  `} />
                  </div>
                </div>
                <div className="p-2">
                  <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                  <div className="text-xs">
                    <MathComponent tex={String.raw`Qs =  ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""}  ${(Q2 - Q1) / (P2 - P1)}P`} />
                    <MathComponent tex={String.raw`Qs =  ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""}  ${(Q2 - Q1) / (P2 - P1)}(0)`} />
                    <MathComponent tex={String.raw`Qs =  ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}`} />
                  </div>
                </div>
                <div className="w-[400px]">
                  <VictoryChart width={600} height={400}>
                    {/* Sumbu X (Quantity) */}
                    <VictoryAxis
                      label="Quantity (Q)"
                      tickFormat={(tick) => `${tick}`} // Format label sumbu X
                      tickValues={[data[1].Q]} // Hapus label pada sumbu Y
                      style={{
                        axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                      }}
                    />
                    {/* Sumbu Y (Price) */}
                    <VictoryAxis
                      dependentAxis
                      label="Price (P)"
                      tickFormat={(tick) => `${tick}`} // Format label sumbu Y
                      tickValues={[data[0].P]} // Hapus label pada sumbu Y
                      style={{
                        axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                      }}
                    />
                    {/* Kurva Fungsi Penawaran */}
                    <VictoryLine
                      data={data}
                      x="Q" // Menggunakan Quantity sebagai sumbu X
                      y="P" // Menggunakan Price sebagai sumbu Y
                      style={{
                        data: { stroke: "green" }, // Warna garis kurva
                      }}
                    />
                  </VictoryChart>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupllyFunctionPage;
