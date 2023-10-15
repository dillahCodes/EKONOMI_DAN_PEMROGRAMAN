import { useState } from "react";
import Navbar from "../components/Navbar";
import TableComponent from "../components/Table";
import { MathComponent } from "mathjax-react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from "victory";
import RulesComponent from "../components/Rules";
import { Footer } from "../components/Footer";

const DemandFunctionPage = () => {
  const [allValues, setAllValues] = useState();
  const getAllValuesFromTableHandler = (values) => {
    setAllValues(values);
  };

  let P1;
  let P2;
  let Q1;
  let Q2;

  if (allValues !== undefined) {
    P1 = allValues.price1;
    P2 = allValues.price2;
    Q1 = allValues.quantity1;
    Q2 = allValues.quantity2;
  }
  let finalPriceIfQ0 = `${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1) / Math.abs((Q2 - Q1) / (P2 - P1))} `;
  let finalQuantityIfP0 = `${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}`;
  let finalResult1 = `Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P`;
  console.info(finalPriceIfQ0, finalQuantityIfP0);

  const data1 = [
    { Q: 0, P: Math.abs(finalPriceIfQ0) },
    { Q: Math.abs(finalQuantityIfP0), P: 0 },
  ];

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-y-5 justify-center w-full  text-black dark:text-slate-300 p-5 pt-10 mt-16  bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="text-xl text-black sm:text-2xl md:text-3xl font-Oswald dark:text-slate-300">demand function (fungsi permintaan)</h1>
        <div className="w-full p-5 gap-y-5 flex flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black ">
          <TableComponent tableFor={"quantity demand (jumlah permintaan (Qd) )"} allValues={getAllValuesFromTableHandler} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <div className="font-bold text-black capitalize font-Kanit dark:text-slate-300">result :</div>
            {!P1 || !P2 || !Q1 || !Q2 ? (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            ) : (
              <>
                {" "}
                <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P `} />
              </>
            )}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll">
            <span className="font-bold text-black capitalize font-Kanit dark:text-slate-300">method: </span>
            {allValues ? (
              <div className={`${!P1 || !P2 || !Q1 || !Q2 ? "hidden" : ""} flex flex-col gap-y-5`}>
                <div className="text-[13px]">
                  <MathComponent tex={String.raw`slope = \frac{\Delta Q}{\Delta P} =  \frac{{Q2}-{Q1}}{{P2}-{P1}} = \frac{${Q2} - ${Q1}}{${P2}-${P1}} = \frac{${Q2 - Q1}}{${P2 - P1}} = ${(Q2 - Q1) / (P2 - P1)}`} />
                </div>

                <div className="p-2 text-xs ">
                  <MathComponent tex={String.raw` \frac{P - P1}{P2 - P1} =  \frac{Q - Q1}{{Q2}-{Q1}}`} />
                  <MathComponent tex={String.raw` \frac{P  ${-P1}}{${P2} - ${P1}} =  \frac{Q  ${-Q1}}{${Q2}-${Q1}}`} />
                  <MathComponent tex={String.raw` \frac{P  ${-P1}}{${P2 - P1}} =  \frac{Q  ${-Q1}}{${Q2 - Q1}}`} />
                  <MathComponent tex={String.raw` ${P2 - P1}Q ${(P2 - P1) * -Q1 >= 0 ? "+" : ""} ${(P2 - P1) * -Q1} = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1}`} />
                  <MathComponent tex={String.raw` ${P2 - P1}Q  = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1} ${Math.abs((P2 - P1) * -Q1) >= 0 ? "+" : ""} ${Math.abs((P2 - P1) * -Q1)}`} />
                  <MathComponent tex={String.raw` ${P2 - P1}Q  = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)}`} />
                  <MathComponent tex={String.raw` \frac{${P2 - P1}Q  = ${Q2 - Q1}P ${(Q2 - Q1) * -P1 >= 0 ? "+" : ""} ${(Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)}}{${P2 - P1}}`} />
                  <MathComponent tex={String.raw` Q  = ${(Q2 - Q1) / (P2 - P1)}P ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1) >= 0 ? "+" : ""} ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}`} />
                  <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P `} />
                </div>
                <div className="p-2">
                  <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                  <div className="text-xs">
                    <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P `} />
                    <MathComponent tex={String.raw` 0 = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P `} />
                    <MathComponent tex={String.raw` ${(Q2 - Q1) / (P2 - P1)}P  = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}   `} />
                    <MathComponent tex={String.raw` P  = \frac{${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}} {${Math.abs((Q2 - Q1) / (P2 - P1))}}  `} />
                    <MathComponent tex={String.raw` P  = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1) / Math.abs((Q2 - Q1) / (P2 - P1))}  `} />
                  </div>
                </div>
                <div className="p-2">
                  <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                  <div className="text-xs">
                    <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}P `} />
                    <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)} ${(Q2 - Q1) / (P2 - P1) >= 0 ? "+" : ""} ${(Q2 - Q1) / (P2 - P1)}(0) `} />
                    <MathComponent tex={String.raw` Qd = ${((Q2 - Q1) * -P1 + Math.abs((P2 - P1) * -Q1)) / (P2 - P1)}`} />
                  </div>
                </div>
                <div className="bg-white rounded-md sm:w-[450px]">
                  <VictoryChart width={600} height={400} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                    {/* Sumbu X (Quantity) */}
                    <VictoryAxis
                      label="Quantity (Q)"
                      tickValues={[0, Q1, Q2, data1[1].Q]} // Hapus label pada sumbu X
                      style={{
                        axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                      }}
                    />
                    {/* Sumbu Y (Price) */}
                    <VictoryAxis
                      dependentAxis
                      label="Price (P)"
                      tickValues={[P1, P2, data1[0].P]} // Hapus label pada sumbu Y
                      style={{
                        axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                      }}
                    />
                    {/* Kurva Fungsi Permintaan */}
                    <VictoryLine
                      data={data1}
                      x="Q" // Menggunakan Quantity sebagai sumbu X
                      y="P" // Menggunakan Price sebagai sumbu Y
                      style={{
                        data: { stroke: "red" }, // Warna garis kurva
                      }}
                    />
                    <VictoryLabel
                      text={finalResult1} // Teks yang ingin ditampilkan
                      x={350} // Koordinat x label
                      y={150} // Koordinat y label
                      textAnchor="middle" // Pusatkan teks
                      angle={0} // Putar teks sesuai kebutuhan
                    />
                  </VictoryChart>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemandFunctionPage;
