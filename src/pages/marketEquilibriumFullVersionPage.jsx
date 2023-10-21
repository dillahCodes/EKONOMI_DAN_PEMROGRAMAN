import { useState } from "react";
import TableMarketComponent from "../components/Table/TableMarket";
import Navbar from "../components/Navbar/Navbar";
import { MathComponent } from "mathjax-react";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from "victory";
import RulesComponent from "../components/Rules/Rules";
import { Footer } from "../components/Footer/Footer";

const MarketEquilibriumFullVersion = () => {
  const [allValues, setAllValues] = useState();

  const getAllValuesFromTableHandler = (event) => {
    setAllValues(event);
  };
  let Price1;
  let Price2;
  let Qd1;
  let Qd2;
  let Qs1;
  let Qs2;
  if (allValues !== undefined) {
    Price1 = allValues[0].Price1;
    Price2 = allValues[0].Price2;
    Qd1 = allValues[1].Qd1;
    Qd2 = allValues[1].Qd2;
    Qs1 = allValues[2].Qs1;
    Qs2 = allValues[2].Qs2;
  }

  let resultQ0Demand = Math.abs(((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1) / Math.abs((Qd2 - Qd1) / (Price2 - Price1)));
  let resultP0Demand = Math.abs(((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1));
  let resultQ0Supply = Math.abs(((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)) / ((Qs2 - Qs1) / (Price2 - Price1));
  let resultP0Supply = ((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1);
  let QdFunctionResult = [{ a: `${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)}`, b: `${(Qd2 - Qd1) / (Price2 - Price1)}` }];
  let QsFunctionResult = [{ a: `${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)}`, b: `${(Qs2 - Qs1) / (Price2 - Price1)}` }];
  let Final_P = ` ${(parseFloat(QdFunctionResult[0].a) + parseFloat(Math.abs(QsFunctionResult[0].a))) / (parseFloat(Math.abs(QdFunctionResult[0].b)) + parseFloat(QsFunctionResult[0].b))}`;
  // Proses perhitungan keseimbangan pasar di sini
  const equilibriumPrice = parseFloat(Final_P);
  const equilibriumQuantity = `${parseFloat(QsFunctionResult[0].a) + parseFloat(QsFunctionResult[0].b) * Final_P}`;
  const DemandFunctionData = [
    { Quantity: resultP0Demand, Price: 0 },
    { Quantity: 0, Price: resultQ0Demand },
  ];

  const supplyFunctionData = [
    { Quantity: 0, Price: resultQ0Supply },
    { Quantity: resultP0Supply, Price: 0 },
    { Quantity: parseFloat(equilibriumQuantity), Price: parseFloat(equilibriumPrice) },
    { Quantity: parseFloat(equilibriumQuantity) * 2, Price: parseFloat(equilibriumPrice) + (parseFloat(equilibriumPrice) - resultQ0Supply) },
  ];
  console.info(resultQ0Supply + parseFloat(equilibriumPrice));
  return (
    <>
      <Navbar />
      <div className="flex items-center   flex-col gap-y-5 justify-center w-full   p-5 pt-10 mt-16 bg-[#F5F5F5] text-black dark:text-slate-300 dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="text-xl text-black sm:text-2xl md:text-3xl font-Oswald dark:text-slate-300">Market Equilibrium (Keseimbangan Pasar) v2.0</h1>
        <div className="w-full p-5 gap-y-5 flex flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black">
          <TableMarketComponent tableFor={"quantity demand (jumlah permintaan (Qd) )"} allValues={getAllValuesFromTableHandler} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <span className="font-bold capitalize font-Kanit">result :</span>
            {!Price1 || !Price2 || !Qd1 || !Qd2 || !Qs1 || !Qs2 ? (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            ) : (
              <>
                <MathComponent tex={String.raw`P  = ${(parseFloat(QdFunctionResult[0].a) + parseFloat(Math.abs(QsFunctionResult[0].a))) / (parseFloat(Math.abs(QdFunctionResult[0].b)) + parseFloat(QsFunctionResult[0].b))}`} />
                <MathComponent tex={String.raw`Qd = ${parseFloat(QdFunctionResult[0].a) + parseFloat(QdFunctionResult[0].b) * Final_P}`} />
                <MathComponent tex={String.raw`Qs = ${parseFloat(QsFunctionResult[0].a) + parseFloat(QsFunctionResult[0].b) * Final_P}`} />
              </>
            )}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
            <span className="font-bold capitalize font-Kanit">method: </span>
            <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2 ${!Price1 || !Price2 || !Qd1 || !Qd2 || !Qs1 || !Qs2 ? "hidden" : ""} `}>
              <h3 className="text-center text-red-600 capitalize font-Kanit">demand function (fungsi permintaan)</h3>
              <div className="p-2 text-xs ">
                <MathComponent tex={String.raw`slope = \frac{\Delta Q}{\Delta P} =  \frac{{Q2}-{Q1}}{{P2}-{P1}} = \frac{${Qd2} - ${Qd1}}{${Price2}-${Price1}} = \frac{${Qd2 - Qd1}}{${Price2 - Price1}} = ${(Qd2 - Qd1) / (Price2 - Price1)}`} />
                <MathComponent tex={String.raw` \frac{P - P1}{P2 - P1} =  \frac{Q - Q1}{{Q2}-{Q1}}`} />
                <MathComponent tex={String.raw` \frac{P  ${-Price1}}{${Price2} - ${Price1}} =  \frac{Q  ${-Qd1}}{${Qd2}-${Qd1}}`} />
                <MathComponent tex={String.raw` \frac{P  ${-Price1}}{${Price2 - Price1}} =  \frac{Q  ${-Qd1}}{${Qd2 - Qd1}}`} />
                <MathComponent tex={String.raw` ${Price2 - Price1}Q ${(Price2 - Price1) * -Qd1 >= 0 ? "+" : ""} ${(Price2 - Price1) * -Qd1} = ${Qd2 - Qd1}P ${(Qd2 - Qd1) * -Price1 >= 0 ? "+" : ""} ${(Qd2 - Qd1) * -Price1}`} />
                <MathComponent tex={String.raw` ${Price2 - Price1}Q  = ${Qd2 - Qd1}P ${(Qd2 - Qd1) * -Price1 >= 0 ? "+" : ""} ${(Qd2 - Qd1) * -Price1} ${Math.abs((Price2 - Price1) * -Qd1) >= 0 ? "+" : ""} ${Math.abs((Price2 - Price1) * -Qd1)}`} />
                <MathComponent tex={String.raw` ${Price2 - Price1}Q  = ${Qd2 - Qd1}P ${(Qd2 - Qd1) * -Price1 >= 0 ? "+" : ""} ${(Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)}`} />
                <MathComponent tex={String.raw` \frac{${Price2 - Price1}Q  = ${Qd2 - Qd1}P ${(Qd2 - Qd1) * -Price1 >= 0 ? "+" : ""} ${(Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)}}{${Price2 - Price1}}`} />
                <MathComponent tex={String.raw` Q  = ${(Qd2 - Qd1) / (Price2 - Price1)}P ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1) >= 0 ? "+" : ""} ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)}`} />
                <span className="text-red-600">
                  <MathComponent tex={String.raw` Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P `} />
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                <div className="text-xs">
                  <MathComponent tex={String.raw` Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P `} />
                  <MathComponent tex={String.raw` 0 = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P `} />
                  <MathComponent tex={String.raw` ${(Qd2 - Qd1) / (Price2 - Price1)}P  = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)}   `} />
                  <MathComponent tex={String.raw` P  = \frac{${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)}} {${Math.abs((Qd2 - Qd1) / (Price2 - Price1))}}  `} />
                  <MathComponent tex={String.raw` P  = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1) / Math.abs((Qd2 - Qd1) / (Price2 - Price1))}  `} />
                </div>
              </div>
              <div className="p-2">
                <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                <div className="text-xs">
                  <MathComponent tex={String.raw` Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P `} />
                  <MathComponent tex={String.raw` Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}(0) `} />
                  <MathComponent tex={String.raw` Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)}`} />
                </div>
              </div>
              <div className="bg-white rounded-md sm:w-[450px] ">
                <VictoryChart width={600} height={400}>
                  {/* Sumbu X (Quantity) */}
                  <VictoryAxis
                    label="Quantity (Q)"
                    tickValues={[0, [Qd1], [Qd2], resultP0Demand]} // Hapus label pada sumbu X
                    style={{
                      axisLabel: { padding: 20 }, // Jarak antara label sumbu X dengan chart
                      grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                    }}
                  />
                  {/* Sumbu Y (Price) */}
                  <VictoryAxis
                    dependentAxis
                    label="Price (P)"
                    tickValues={[[Price1], [Price2], resultQ0Demand]} // Hapus label pada sumbu Y
                    style={{
                      axisLabel: { padding: 20 }, // Jarak antara label sumbu Y dengan chart
                      grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                    }}
                  />
                  {/* Kurva Fungsi Permintaan */}
                  <VictoryLine
                    data={DemandFunctionData}
                    x="Quantity" // Menggunakan Quantity sebagai sumbu X
                    y="Price" // Menggunakan Price sebagai sumbu Y
                    style={{
                      data: { stroke: "red" }, // Warna garis kurva
                    }}
                  />
                  <VictoryLabel
                    style={{ fontSize: 12, fill: "red" }}
                    text={`Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P`} // Teks yang ingin ditampilkan
                    x={350} // Koordinat x label
                    y={150} // Koordinat y label
                    textAnchor="middle" // Pusatkan teks
                    angle={0} // Putar teks sesuai kebutuhan
                  />
                </VictoryChart>
              </div>
            </div>
            <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2 ${!Price1 || !Price2 || !Qd1 || !Qd2 || !Qs1 || !Qs2 ? "hidden" : ""} `}>
              <h3 className="text-center text-green-600 capitalize font-Kanit">supply function (fungsi penawaran)</h3>
              <div className="p-2 text-xs ">
                {/* rumus di isni */}
                <MathComponent tex={String.raw` \frac{P - P1}{P2 - P1} =  \frac{Q - Q1}{Q2 - Q1} `} />
                <MathComponent tex={String.raw` \frac{P - ${Price1}}{${Price2} - ${Price1}} =  \frac{Q - ${Qs1}}{${Qs2} - ${Qs1}} `} />
                <MathComponent tex={String.raw` \frac{P - ${Price1}}{${Price2 - Price1}} =  \frac{Q - ${Qs1}}{${Qs2 - Qs1}} `} />
                <MathComponent tex={String.raw`${Price2 - Price1}Q ${(Price2 - Price1) * -Qs1 >= 0 ? "+" : ""} ${(Price2 - Price1) * -Qs1} = ${Qs2 - Qs1}P ${(Qs2 - Qs1) * -Price1 >= 0 ? "+" : ""} ${(Qs2 - Qs1) * -Price1} `} />
                <MathComponent tex={String.raw`${Price2 - Price1}Q  = ${Qs2 - Qs1}P ${(Qs2 - Qs1) * -Price1 >= 0 ? "+" : ""} ${(Qs2 - Qs1) * -Price1} ${Math.abs((Price2 - Price1) * -Qs1) >= 0 ? "+" : ""} ${Math.abs((Price2 - Price1) * -Qs1)}`} />
                <MathComponent tex={String.raw`\frac{${Price2 - Price1}Q  = ${Qs2 - Qs1}P  ${(Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1) >= 0 ? "+" : ""} ${(Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)}}{${Price2 - Price1}}`} />
                <MathComponent tex={String.raw`Q = ${(Qs2 - Qs1) / (Price2 - Price1)}P ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1) >= 0 ? "+" : ""}${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)}  `} />
                <span className="text-green-600">
                  <MathComponent tex={String.raw`Qs = ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qs2 - Qs1) / (Price2 - Price1)}P  `} />
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
                <div className="text-xs">
                  {/* rumus di sini */}
                  <MathComponent tex={String.raw`Qs =  ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""}  ${(Qs2 - Qs1) / (Price2 - Price1)}P`} />
                  <MathComponent tex={String.raw`0 =  ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""}  ${(Qs2 - Qs1) / (Price2 - Price1)}P`} />
                  <MathComponent tex={String.raw`${Math.abs(((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1))} =${(Qs2 - Qs1) / (Price2 - Price1)}P`} />
                  <MathComponent tex={String.raw`P = \frac{${Math.abs(((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1))}} {${(Qs2 - Qs1) / (Price2 - Price1)}}`} />
                  <MathComponent tex={String.raw`P = ${Math.abs(((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)) / ((Qs2 - Qs1) / (Price2 - Price1))}  `} />
                </div>
              </div>
              <div className="p-2">
                <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
                <div className="text-xs">
                  {/* rumus di isni */}
                  <MathComponent tex={String.raw`Qs =  ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""}  ${(Qs2 - Qs1) / (Price2 - Price1)}P`} />
                  <MathComponent tex={String.raw`Qs =  ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""}  ${(Qs2 - Qs1) / (Price2 - Price1)}(0)`} />
                  <MathComponent tex={String.raw`Qs =  ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)}`} />
                </div>
              </div>
              <div className="  bg-white rounded-md sm:w-[450px]">
                {/* chart di isni */}
                <VictoryChart width={600} height={400}>
                  {/* Sumbu X (Quantity) */}
                  <VictoryAxis
                    label="Quantity (Q)"
                    tickFormat={(tick) => `${tick}`} // Format label sumbu X
                    tickValues={[supplyFunctionData[1].Quantity]} // Hapus label pada sumbu Y
                    style={{
                      axisLabel: { padding: 20 }, // Jarak antara label sumbu X dengan chart
                      grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                    }}
                  />
                  {/* Sumbu Y (Price) */}
                  <VictoryAxis
                    dependentAxis
                    label="Price (P)"
                    tickFormat={(tick) => `${tick}`} // Format label sumbu Y
                    tickValues={[supplyFunctionData[0].Price]} // Hapus label pada sumbu Y
                    style={{
                      axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                      grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                    }}
                  />
                  {/* Kurva Fungsi Penawaran */}
                  <VictoryLine
                    data={supplyFunctionData}
                    x="Quantity" // Menggunakan Quantity sebagai sumbu X
                    y="Price" // Menggunakan Price sebagai sumbu Y
                    style={{
                      data: { stroke: "green" }, // Warna garis kurva
                    }}
                  />
                  <VictoryLabel text={`Qs = ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qs2 - Qs1) / (Price2 - Price1)}P`} x={500} y={150} textAnchor="middle" style={{ fontSize: 12, fill: "green" }} />
                </VictoryChart>
              </div>
            </div>
            <div className={`overflow-x-scroll text-base border-[2px] border-[#4cb0af] p-2 rounded-sm my-2 ${!Price1 || !Price2 || !Qd1 || !Qd2 || !Qs1 || !Qs2 ? "hidden" : ""} `}>
              <h3 className="text-center text-green-600 capitalize font-Kanit">Market Equilibrium (Keseimbangan Pasar)</h3>
              <div className="p-2 text-xs ">
                {/* rumus di isni */}
                <div>
                  <MathComponent tex={String.raw`Qd = Qs`} />
                  <MathComponent tex={String.raw`${QdFunctionResult[0].a} ${QdFunctionResult[0].b > 0 ? "+" : ""} ${QdFunctionResult[0].b}P = ${QsFunctionResult[0].a} ${QsFunctionResult[0].b > 0 ? "+" : ""} ${QsFunctionResult[0].b}P`} />
                  <MathComponent tex={String.raw`${QdFunctionResult[0].a} ${Math.abs(QsFunctionResult[0].a) > 0 ? "+" : ""} ${Math.abs(QsFunctionResult[0].a)} = ${Math.abs(QdFunctionResult[0].b)}P ${QsFunctionResult[0].b > 0 ? "+" : ""} ${QsFunctionResult[0].b}P`} />
                  <MathComponent tex={String.raw`${parseFloat(QdFunctionResult[0].a) + parseFloat(Math.abs(QsFunctionResult[0].a))} = ${parseFloat(Math.abs(QdFunctionResult[0].b)) + parseFloat(QsFunctionResult[0].b)}P`} />
                  <MathComponent tex={String.raw`P  = \frac {${parseFloat(QdFunctionResult[0].a) + parseFloat(Math.abs(QsFunctionResult[0].a))}} {${parseFloat(Math.abs(QdFunctionResult[0].b)) + parseFloat(QsFunctionResult[0].b)}}`} />
                  <MathComponent tex={String.raw`P  = ${(parseFloat(QdFunctionResult[0].a) + parseFloat(Math.abs(QsFunctionResult[0].a))) / (parseFloat(Math.abs(QdFunctionResult[0].b)) + parseFloat(QsFunctionResult[0].b))}`} />
                </div>
                <div className={` w-full text-sm ml-10`}>
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QdFunctionResult[0].a)} ${parseFloat(QdFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QdFunctionResult[0].b)}P`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QdFunctionResult[0].a)} ${parseFloat(QdFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QdFunctionResult[0].b)}(${Final_P})`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QdFunctionResult[0].a)} ${parseFloat(QdFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QdFunctionResult[0].b) * Final_P}`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QdFunctionResult[0].a) + parseFloat(QdFunctionResult[0].b) * Final_P}`} />
                </div>
                <div className={` w-full text-sm ml-10`}>
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QsFunctionResult[0].a)} ${parseFloat(QsFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QsFunctionResult[0].b)}P`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QsFunctionResult[0].a)} ${parseFloat(QsFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QsFunctionResult[0].b)}(${Final_P})`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QsFunctionResult[0].a)} ${parseFloat(QsFunctionResult[0].b) > 0 ? "+" : ""} ${parseFloat(QsFunctionResult[0].b) * Final_P}`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QsFunctionResult[0].a) + parseFloat(QsFunctionResult[0].b) * Final_P}`} />
                </div>
              </div>
              <div className=" bg-white rounded-md sm:w-[450px]">
                {/* chart di isni */}
                <VictoryChart width={600} height={400}>
                  {/* Kurva Permintaan (Demand) */}
                  <VictoryLine
                    data={DemandFunctionData}
                    x="Quantity" // Menggunakan Quantity sebagai sumbu X
                    y="Price" // Menggunakan Price sebagai sumbu Y
                    style={{
                      data: { stroke: "red" }, // Warna garis kurva
                    }}
                  />
                  {/* Sumbu X (Quantity) */}
                  <VictoryAxis
                    label="Quantity (Q)"
                    tickFormat={(tick) => `${tick}`} // Format label sumbu X
                    tickValues={[[supplyFunctionData[1].Quantity], [equilibriumQuantity], [0], [resultP0Demand]]} // Hapus label pada sumbu Y
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
                    tickValues={[[supplyFunctionData[0].Price], [equilibriumPrice], [resultQ0Demand]]} // Hapus label pada sumbu Y
                    style={{
                      axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                      grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                    }}
                  />
                  {/* Kurva Penawaran (Supply) */}
                  <VictoryLine
                    data={supplyFunctionData}
                    x="Quantity" // Menggunakan Quantity sebagai sumbu X
                    y="Price" // Menggunakan Price sebagai sumbu Y
                    style={{
                      data: { stroke: "green" }, // Warna garis kurva
                    }}
                  />
                  {/* Label Keseimbangan Pasar */}
                  <VictoryLabel text={`Equilibrium\nPrice: $${equilibriumPrice}\nQuantity: ${equilibriumQuantity}`} x={110} y={100} textAnchor="middle" style={{ fontSize: 12 }} />
                  <VictoryLabel text={`Qs = ${((Qs2 - Qs1) * -Price1 + Math.abs((Price2 - Price1) * -Qs1)) / (Price2 - Price1)} ${(Qs2 - Qs1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qs2 - Qs1) / (Price2 - Price1)}P`} x={490} y={90} textAnchor="middle" style={{ fontSize: 12, fill: "green" }} />
                  <VictoryLabel text={`Qd = ${((Qd2 - Qd1) * -Price1 + Math.abs((Price2 - Price1) * -Qd1)) / (Price2 - Price1)} ${(Qd2 - Qd1) / (Price2 - Price1) >= 0 ? "+" : ""} ${(Qd2 - Qd1) / (Price2 - Price1)}P`} x={490} y={105} textAnchor="middle" style={{ fontSize: 12, fill: "red" }} />
                </VictoryChart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketEquilibriumFullVersion;
