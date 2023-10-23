import { useState } from "react";
import RulesComponent from "../components/Rules/Rules";
import { MathComponent } from "mathjax-react";
import { Footer } from "../components/Footer/Footer";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from "victory";
import InputMarketEquilibrium from "../components/Table/TableMarketEquilibrium";

const MarketEquilibriumPage = () => {
  const [valuesFromInput, setValuesFromInput] = useState();

  const reciveAllValuesFromInputHandler = (event) => {
    setValuesFromInput(event);
  };

  let Qd_A;
  let Qd_B;
  let Qs_A;
  let Qs_B;
  if (valuesFromInput !== undefined) {
    valuesFromInput[0].Qd?.A ? (Qd_A = parseFloat(valuesFromInput[0].Qd?.A)) : undefined;
    valuesFromInput[0].Qd?.B ? (Qd_B = parseFloat(valuesFromInput[0].Qd?.B.replace(",", "."))) : undefined;
    valuesFromInput[1].Qs?.A ? (Qs_A = parseFloat(valuesFromInput[1].Qs?.A)) : undefined;
    valuesFromInput[1].Qs?.B ? (Qs_B = parseFloat(valuesFromInput[1].Qs?.B.replace(",", "."))) : undefined;
  }

  // all demand  mecanism here
  let PifQdemand0 = `${Qd_A / Math.abs(Qd_B)}`;
  let QifPdemand0 = Qd_A;
  const dataDemand = [
    { Q: 0, P: parseFloat(PifQdemand0) },
    { Q: parseFloat(QifPdemand0), P: 0 },
  ];

  // all supply mechanism here
  let PifQsupplyd0 = `${Math.abs(Qs_A) / Qs_B}`;
  let QifPsupply0 = `${Qs_A}`;
  const dataSupply = [
    { Q: parseFloat(QifPsupply0), P: 0 },
    { Q: 0, P: parseFloat(PifQsupplyd0) },
    { Q: 0 + Math.abs(parseFloat(QifPsupply0)), P: parseFloat(PifQsupplyd0) + parseFloat(PifQsupplyd0 - QifPsupply0) * 0.8 },
  ];

  // Market Equilibrium Here
  let FinalResultP = (Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B);
  let FinalResultQ = Qs_A + Qs_B * FinalResultP;

  return (
    <>
      <div className="flex items-center flex-col gap-y-5   justify-around w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="mt-32 text-xl text-black sm:text-2xl md:text-3xl font-Oswald dark:text-slate-300">Market Equilibrium (Keseimbangan Pasar) v1.0</h1>
        <div className="w-full   p-5 gap-y-5 pb-20 flex flex-col md:w-[80%] overflow-x-scroll lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black">
          <InputMarketEquilibrium exportAllValue={reciveAllValuesFromInputHandler} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <div className="font-bold capitalize font-Kanit">result :</div>
            {!Qd_A || !Qd_B || !Qs_A || !Qs_B ? (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            ) : (
              <>
                {" "}
                <MathComponent tex={String.raw` P =  ${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}`} />
                <MathComponent tex={String.raw`Qd = ${Qd_A + Qd_B * FinalResultP}`} />
                <MathComponent tex={String.raw`Qd = ${Qs_A + Qs_B * FinalResultP}`} />
              </>
            )}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll ">
            <span className="font-bold capitalize font-Kanit">method: </span>
            <div className={`flex flex-col gap-y-5 ${!Qd_A || !Qd_B || !Qs_A || !Qs_B ? "hidden" : ""}`}>
              <div className="p-2">
                <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2`}>
                  <h3 className="text-center text-red-600 capitalize font-Kanit">demand function (fungsi permintaan)</h3>
                  <div className="p-2 text-xs ">
                    <span className="text-red-600"></span>
                  </div>
                  <div className="p-2">
                    <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                    <div className="text-xs">
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P`} />
                      <MathComponent tex={String.raw`0 = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P`} />
                      <MathComponent tex={String.raw`${Math.abs(Qd_B)}P = ${Qd_A} `} />
                      <MathComponent tex={String.raw`P = \frac {${Qd_A}}{${Math.abs(Qd_B)}} `} />
                      <MathComponent tex={String.raw`P = ${Qd_A / Math.abs(Qd_B)} `} />
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                    <div className="text-xs">
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P`} />
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}(0)`} />
                      <MathComponent tex={String.raw`Qd = ${Qd_A}`} />
                    </div>
                  </div>
                  <div className="bg-white rounded-md sm:w-[450px]">
                    <VictoryChart width={600} height={400} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                      {/* Sumbu X (Quantity) */}
                      <VictoryAxis
                        label="Quantity (Q)"
                        // tickValues={[0, [QifPdemand0]]} // Hapus label pada sumbu X
                        style={{
                          axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Sumbu Y (Price) */}
                      <VictoryAxis
                        dependentAxis
                        label="Price (P)"
                        // tickValues={[[PifQdemand0]]} // Hapus label pada sumbu Y
                        style={{
                          axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Kurva Fungsi Permintaan */}
                      <VictoryLine
                        data={dataDemand}
                        x="Q" // Menggunakan Quantity sebagai sumbu X
                        y="P" // Menggunakan Price sebagai sumbu Y
                        style={{
                          data: { stroke: "red" }, // Warna garis kurva
                        }}
                      />
                      <VictoryLabel
                        // text={finalResult1} // Teks yang ingin ditampilkan
                        x={350} // Koordinat x label
                        y={150} // Koordinat y label
                        textAnchor="middle" // Pusatkan teks
                        angle={0} // Putar teks sesuai kebutuhan
                      />
                    </VictoryChart>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2`}>
                  <h3 className="text-center text-green-600 capitalize font-Kanit">supply function (fungsi penewaran)</h3>
                  <div className="p-2 text-xs ">
                    <span className="text-red-600"></span>
                  </div>
                  <div className="p-2">
                    <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                    <div className="text-xs">
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`${Qs_A} =   ${Qs_B}P`} />
                      <MathComponent tex={String.raw`P =  \frac{${Math.abs(Qs_A)}} {${Qs_B}}`} />
                      <MathComponent tex={String.raw`P =  ${Math.abs(Qs_A) / Qs_B}`} />
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                    <div className="text-xs">
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qd_B}(0)`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A}`} />
                    </div>
                  </div>
                  <div className="bg-white rounded-md sm:w-[450px]">
                    <VictoryChart width={600} height={400} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                      {/* Sumbu X (Quantity) */}
                      <VictoryAxis
                        label="Quantity (Q)"
                        tickValues={[0, [QifPsupply0]]} // Hapus label pada sumbu X
                        style={{
                          axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Sumbu Y (Price) */}
                      <VictoryAxis
                        dependentAxis
                        label="Price (P)"
                        tickValues={[[PifQsupplyd0]]} // Hapus label pada sumbu Y
                        style={{
                          axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Kurva Fungsi Permintaan */}
                      <VictoryLine
                        data={dataSupply}
                        x="Q" // Menggunakan Quantity sebagai sumbu X
                        y="P" // Menggunakan Price sebagai sumbu Y
                        style={{
                          data: { stroke: "green" }, // Warna garis kurva
                        }}
                      />
                      <VictoryLabel
                        // text={finalResult1} // Teks yang ingin ditampilkan
                        x={350} // Koordinat x label
                        y={150} // Koordinat y label
                        textAnchor="middle" // Pusatkan teks
                        angle={0} // Putar teks sesuai kebutuhan
                      />
                    </VictoryChart>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2`}>
                  <h3 className="text-center text-green-600 capitalize font-Kanit">Market Equilibrium (Keseimbangan Pasar)</h3>
                  <div className="p-2">
                    <div className="text-xs">
                      {/* rumus di sini */}
                      <MathComponent tex={String.raw`Qd = Qs`} />
                      <MathComponent tex={String.raw`${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`${Qd_A} ${Math.abs(Qs_A) > 0 ? "+" : ""} ${Math.abs(Qs_A)}  = ${Math.abs(Qd_B)}P  ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`${Qd_A + Math.abs(Qs_A)}  = ${Math.abs(Qd_B) + Qs_B}P`} />
                      <MathComponent tex={String.raw`${Qd_A + Math.abs(Qs_A)}  = ${Math.abs(Qd_B) + Qs_B}P`} />
                      <MathComponent tex={String.raw` P = \frac {${Qd_A + Math.abs(Qs_A)}} {${Math.abs(Qd_B) + Qs_B}}`} />
                      <MathComponent tex={String.raw` P =  ${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}`} />
                    </div>
                    <div className="mt-10 ml-10 text-xs">
                      {/* rumus di sini */}
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}P`} />
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B}(${FinalResultP})`} />
                      <MathComponent tex={String.raw`Qd = ${Qd_A} ${Qd_B > 0 ? "+" : ""} ${Qd_B * FinalResultP}`} />
                      <MathComponent tex={String.raw`Qd = ${Qd_A + Qd_B * FinalResultP}`} />
                    </div>
                    <div className="ml-10 text-xs">
                      {/* rumus di sini */}
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}P`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B}(${FinalResultP})`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A} ${Qs_B > 0 ? "+" : ""} ${Qs_B * FinalResultP}`} />
                      <MathComponent tex={String.raw`Qd = ${Qs_A + Qs_B * FinalResultP}`} />
                    </div>
                  </div>
                  <div className="bg-white rounded-md sm:w-[450px]">
                    <VictoryChart width={600} height={400}>
                      {/* Kurva Permintaan (Demand) */}
                      <VictoryLine
                        data={dataDemand}
                        x="Q" // Menggunakan Quantity sebagai sumbu X
                        y="P" // Menggunakan Price sebagai sumbu Y
                        style={{
                          data: { stroke: "red" }, // Warna garis kurva
                        }}
                      />
                      {/* Sumbu X (Quantity) */}
                      <VictoryAxis
                        label="Quantity (Q)"
                        tickFormat={(tick) => `${tick}`} // Format label sumbu X
                        tickValues={[[QifPsupply0], 0, [FinalResultQ], [QifPdemand0]]} // Hapus label pada sumbu Y
                        style={{
                          axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Sumbu Y (Price) */}
                      <VictoryAxis
                        dependentAxis
                        label="Price (P)"
                        tickFormat={(tick) => `${tick}`} // Format label sumbu Y
                        tickValues={[[PifQsupplyd0], [FinalResultP], [PifQdemand0]]} // Hapus label pada sumbu Y
                        style={{
                          axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                          grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                        }}
                      />
                      {/* Kurva Penawaran (Supply) */}
                      <VictoryLine
                        data={dataSupply}
                        x="Q" // Menggunakan Quantity sebagai sumbu X
                        y="P" // Menggunakan Price sebagai sumbu Y
                        style={{
                          data: { stroke: "green" }, // Warna garis kurva
                        }}
                      />
                      {/* Label Keseimbangan Pasar */}
                      <VictoryLabel text={`Equilibrium\nPrice: $${(Qd_A + Math.abs(Qs_A)) / (Math.abs(Qd_B) + Qs_B)}\nQuantity: ${Qs_A + Qs_B * FinalResultP}`} x={110} y={100} textAnchor="middle" style={{ fontSize: 12 }} />
                      {/* <VictoryLabel text={`Qs = ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qs2 - Qs1) / (Price2 - Price1)}P`} x={490} y={90} textAnchor="middle" style={{ fontSize: 12, fill: "green" }} /> */}
                      {/* <VictoryLabel text={`Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P`} x={490} y={105} textAnchor="middle" style={{ fontSize: 12, fill: "red" }} /> */}
                    </VictoryChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MarketEquilibriumPage;
