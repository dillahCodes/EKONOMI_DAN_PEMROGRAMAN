import { useState } from "react";
import { MathComponent } from "mathjax-react";
import ChangeInDemandTable from "../components/Table/TableChangeInDemand";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from "victory";
import RulesComponent from "../components/Rules/Rules";
import { Footer } from "../components/Footer/Footer";

const ChangeInDemand = () => {
  const [ALL_VALUE_FROM_INPUT, SET_ALL_VALUE_FROM_INPUT] = useState();

  const GET_VALUE_FROM_INPUT_FUNCTION_HANDLER = (event) => {
    SET_ALL_VALUE_FROM_INPUT(event);
  };

  let QD_OLD_A, QD_OLD_B, QD_A_NEW, QS_A, QS_B, QD_B_NEW;
  if (ALL_VALUE_FROM_INPUT !== undefined) {
    QD_OLD_A = ALL_VALUE_FROM_INPUT[0].QD_A_OLD;
    ALL_VALUE_FROM_INPUT[1]?.QD_B_OLD ? (QD_OLD_B = parseFloat(ALL_VALUE_FROM_INPUT[1].QD_B_OLD.replace(",", "."))) : undefined;
    QS_A = ALL_VALUE_FROM_INPUT[2].QS_A;
    ALL_VALUE_FROM_INPUT[3]?.QS_B ? (QS_B = parseFloat(ALL_VALUE_FROM_INPUT[3].QS_B.replace(",", "."))) : undefined;
    QD_A_NEW = ALL_VALUE_FROM_INPUT[4].QD_A_NEW;
    ALL_VALUE_FROM_INPUT[5]?.QD_B_NEW ? (QD_B_NEW = parseFloat(ALL_VALUE_FROM_INPUT[5].QD_B_NEW.replace(",", "."))) : undefined;
  }
  // VARIABLE FOR VERIFICATION
  const variablesToCheck = [QD_OLD_A, QD_OLD_B, QD_A_NEW, QS_A, QS_B, QD_B_NEW];

  // MARKET Equilibrium OLD HERE
  let EQ_PRICE_OLD = (parseFloat(QD_OLD_A) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))) / ((QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)) + QS_B).toFixed(1);
  let EQ_QD_OLD = parseFloat(QD_OLD_A) + QD_OLD_B * EQ_PRICE_OLD;
  let EQ_QS_OLD = parseFloat(QS_A) + QS_B * EQ_PRICE_OLD;

  // MARKET Equilibrium NEW HERE
  let EQ_PRICE_NEW = (parseFloat(QD_A_NEW) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))) / ((QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW)) + QS_B).toFixed(1);
  let EQ_QD_NEW = parseFloat(QD_A_NEW) + QD_B_NEW * EQ_PRICE_NEW;
  let EQ_QS_NEW = parseFloat(QS_A) + QS_B * EQ_PRICE_NEW;

  // QD OLD DATA HERE
  let QD_OLD_Q_IF_P0 = QD_OLD_A - QD_OLD_B * 0;
  let QD_OLD_P_IF_Q0 = `${QD_OLD_A / (QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B))}`;
  const data1 = [
    { Q: parseFloat(QD_OLD_Q_IF_P0), P: 0 },
    { Q: 0, P: parseFloat(QD_OLD_P_IF_Q0) },
  ];
  // QD NEW DATA HERE
  let QD_NEW_Q_IF_P0 = QD_A_NEW - QD_B_NEW * 0;
  let QD_NEW_P_IF_Q0 = `${QD_A_NEW / (QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW))}`;
  const data3 = [
    { Q: parseFloat(QD_NEW_Q_IF_P0), P: 0 },
    { Q: 0, P: parseFloat(QD_NEW_P_IF_Q0) },
  ];

  // Qs DATA HERE
  let QS_OLD_Q_IF_P0 = QS_A - QS_B * 0;
  let QS_OLD_P_IF_Q0 = QS_A / (QS_B > 0 ? -QS_B : Math.abs(QS_B));
  const data2 = [
    { Q: QS_OLD_Q_IF_P0, P: 0 },
    { Q: 0, P: QS_OLD_P_IF_Q0 },
    { Q: EQ_QD_NEW, P: EQ_PRICE_NEW },
    { Q: EQ_QD_NEW * 2, P: QS_OLD_P_IF_Q0 + (EQ_PRICE_NEW - QS_OLD_P_IF_Q0) * 2 },
  ];

  return (
    <>
      <div className="flex items-center flex-col gap-y-5 min-h-screen   justify-between w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="px-3 text-xl text-center text-black mt-28 dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Change in Demand (perubahan fungsi permintaan)</h1>
        <div className="w-full mb-10 p-5 gap-y-5 flex flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black ">
          <ChangeInDemandTable tableFor={"quantity suplly (jumlah penawaran (Qs) )"} getAllValue={GET_VALUE_FROM_INPUT_FUNCTION_HANDLER} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2">
            {" "}
            <span className="font-bold capitalize font-Kanit">result :</span>
            {variablesToCheck.every((variable) => variable !== undefined) ? (
              <div className={`${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
                <div className="border-[2px] text-base  rounded-md border-[#4cb0af] p-2 mt-2">
                  <span className="font-bold capitalize font-Kanit">
                    {" "}
                    Market Equilibrium (<span className="text-red-500">OLD</span>){" "}
                  </span>{" "}
                  <span className="text-red-500">
                    <MathComponent tex={String.raw`Qd1 = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P`} />
                  </span>
                  <MathComponent tex={String.raw`P =${EQ_PRICE_OLD}  `} />
                  <MathComponent tex={String.raw`Qd =${EQ_QD_OLD}  `} />
                  <MathComponent tex={String.raw`Qs =${EQ_QS_OLD}  `} />
                </div>
                <div className="border-[2px] text-base  rounded-md border-[#4cb0af] p-2 mt-3">
                  <span className="font-bold capitalize font-Kanit">
                    {" "}
                    Market Equilibrium (<span className="text-blue-500">NEW</span>){" "}
                  </span>{" "}
                  <span className="text-blue-500">
                    <MathComponent tex={String.raw`Qd2 = ${QD_A_NEW} ${QD_B_NEW > 0 ? "+" : ""} ${QD_B_NEW}P  `} />
                  </span>
                  <MathComponent tex={String.raw`P =${EQ_PRICE_OLD}  `} />
                  <MathComponent tex={String.raw`Qd =${EQ_QD_NEW}  `} />
                  <MathComponent tex={String.raw`Qs =${EQ_QS_NEW}  `} />
                </div>
              </div>
            ) : (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            )}
            {/* <div className="p-2">
              <span className="font-bold capitalize font-Kanit">If Quantity (Q) = 0; Price (P) = ? </span> <br />
              <div className="text-xs">
                <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P`} />
                <MathComponent tex={String.raw`0 = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P`} />
                <MathComponent tex={String.raw`${QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)}P = ${QD_OLD_A} `} />
                <MathComponent tex={String.raw`P = \frac {${QD_OLD_A}}{${QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)}} `} />
                <MathComponent tex={String.raw`P =  ${QD_OLD_A / (QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B))} `} />
              </div>
            </div>
            <div className="p-2">
              <span className="font-bold capitalize font-Kanit">If Price (P) = 0; Quantity (Q) = ? </span> <br />
              <div className="text-xs">
                <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P`} />
                <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}(0)`} />
                <MathComponent tex={String.raw`Qd = ${QD_OLD_A - QD_OLD_B * 0}`} />
              </div>
            </div> */}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll">
            {" "}
            <span className="font-bold capitalize font-Kanit">method :</span>
            <div className={`${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
              <div className="p-4 mt-2 rounded-md border-[2px]  border-[#4cb0af]">
                <span className="font-bold capitalize font-Kanit">
                  {" "}
                  Market Equilibrium (<span className="text-red-500">OLD</span>){" "}
                </span>{" "}
                <br />
                <div className="flex flex-col text-xs gap-y-0">
                  <MathComponent tex={String.raw`Qd = Qs`} />
                  <div className="flex gap-x-1">
                    <span className="text-red-500">
                      {" "}
                      <MathComponent tex={String.raw`${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P `} />
                    </span>
                    <MathComponent tex={String.raw`= ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}P `} />
                  </div>
                  <MathComponent tex={String.raw`${QD_OLD_A} ${(QS_A > 0 ? -QS_A : Math.abs(QS_A)) > 0 ? "+" : ""} ${QS_A > 0 ? -QS_A : Math.abs(QS_A)} = ${QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)}p ${QS_B > 0 ? "+" : ""}  ${QS_B}p  `} />
                  <MathComponent tex={String.raw`${parseFloat(QD_OLD_A) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))} = ${((QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)) + QS_B).toFixed(1)}p  `} />
                  <MathComponent tex={String.raw`p = \frac{${parseFloat(QD_OLD_A) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))}}{${((QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)) + QS_B).toFixed(1)}}  `} />
                  <MathComponent tex={String.raw`p = ${(parseFloat(QD_OLD_A) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))) / ((QD_OLD_B > 0 ? -QD_OLD_B : Math.abs(QD_OLD_B)) + QS_B).toFixed(1)}  `} />
                </div>
                <div className="mt-5 ml-10 text-xs">
                  <span className="text-red-500">
                    <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}P`} />
                  </span>
                  <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B > 0 ? "+" : ""} ${QD_OLD_B}(${EQ_PRICE_OLD})`} />
                  <MathComponent tex={String.raw`Qd = ${QD_OLD_A} ${QD_OLD_B * EQ_PRICE_OLD > 0 ? "+" : ""} ${QD_OLD_B * EQ_PRICE_OLD}`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QD_OLD_A) + QD_OLD_B * EQ_PRICE_OLD}`} />
                </div>
                <div className="mt-5 text-xs ml-14">
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}P`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}(${EQ_PRICE_OLD})`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B * EQ_PRICE_OLD > 0 ? "+" : ""} ${QS_B * EQ_PRICE_OLD}`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QS_A) + QS_B * EQ_PRICE_OLD}`} />
                </div>
              </div>
              <div className="p-4 mt-2 rounded-md border-[2px]  border-[#4cb0af]">
                <span className="font-bold capitalize font-Kanit">
                  {" "}
                  Market Equilibrium (<span className="text-blue-500">NEW</span>){" "}
                </span>{" "}
                <br />
                <div className="flex flex-col text-xs gap-y-0">
                  <MathComponent tex={String.raw`Qd = Qs`} />
                  <div className="flex gap-x-1">
                    <span className="text-blue-500">
                      <MathComponent tex={String.raw`${QD_A_NEW} ${QD_B_NEW > 0 ? "+" : ""} ${QD_B_NEW}P  `} />
                    </span>
                    <MathComponent tex={String.raw` = ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}P `} />
                  </div>
                  <MathComponent tex={String.raw`${QD_A_NEW} ${(QS_A > 0 ? -QS_A : Math.abs(QS_A)) > 0 ? "+" : ""} ${QS_A > 0 ? -QS_A : Math.abs(QS_A)} = ${QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW)}p ${QS_B > 0 ? "+" : ""}  ${QS_B}p  `} />
                  <MathComponent tex={String.raw`${parseFloat(QD_A_NEW) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))} = ${((QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW)) + QS_B).toFixed(1)}p  `} />
                  <MathComponent tex={String.raw`p = \frac{${parseFloat(QD_A_NEW) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))}}{${((QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW)) + QS_B).toFixed(1)}}  `} />
                  <MathComponent tex={String.raw`p = ${(parseFloat(QD_A_NEW) + (QS_A > 0 ? -QS_A : Math.abs(QS_A))) / ((QD_B_NEW > 0 ? -QD_B_NEW : Math.abs(QD_B_NEW)) + QS_B).toFixed(1)}  `} />
                </div>
                <div className="mt-5 ml-10 text-xs">
                  <span className="text-blue-500">
                    <MathComponent tex={String.raw`Qd = ${QD_A_NEW} ${QD_B_NEW > 0 ? "+" : ""} ${QD_B_NEW}P`} />
                  </span>
                  <MathComponent tex={String.raw`Qd = ${QD_A_NEW} ${QD_B_NEW > 0 ? "+" : ""} ${QD_B_NEW}(${EQ_PRICE_NEW})`} />
                  <MathComponent tex={String.raw`Qd = ${QD_A_NEW} ${QD_B_NEW * EQ_PRICE_NEW > 0 ? "+" : ""} ${QD_B_NEW * EQ_PRICE_NEW}`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QD_A_NEW) + QD_B_NEW * EQ_PRICE_NEW}`} />
                </div>
                <div className="mt-5 text-xs ml-14">
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}P`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B > 0 ? "+" : ""} ${QS_B}(${EQ_PRICE_NEW})`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A} ${QS_B * EQ_PRICE_NEW > 0 ? "+" : ""} ${QS_B * EQ_PRICE_NEW}`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QS_A) + QS_B * EQ_PRICE_NEW}`} />
                </div>
              </div>
            </div>
            {/* chart here */}
            <div className={`w-full border-[2px] border-[#4cb0af] my-2 rounded-md bg-white  ${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
              <VictoryChart width={600} height={400} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                {/* Sumbu X (Quantity) */}
                <VictoryAxis
                  label="Quantity (Q)"
                  tickValues={[QS_OLD_Q_IF_P0, 0, EQ_QD_OLD, EQ_QD_NEW, QD_OLD_Q_IF_P0, QD_NEW_Q_IF_P0]} // Hapus label pada sumbu X
                  style={{
                    axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                    grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                  }}
                />
                {/* Sumbu Y (Price) */}
                <VictoryAxis
                  dependentAxis
                  label="Price (P)"
                  tickValues={[QS_OLD_P_IF_Q0, EQ_PRICE_OLD, EQ_PRICE_NEW, parseFloat(QD_OLD_P_IF_Q0), parseFloat(QD_NEW_P_IF_Q0)]} // Hapus label pada sumbu Y
                  style={{
                    axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                    grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                  }}
                />
                {/* Kurva Fungsi Permintaan 1*/}
                <VictoryLine
                  data={data1}
                  x="Q" // Menggunakan Quantity sebagai sumbu X
                  y="P" // Menggunakan Price sebagai sumbu Y
                  style={{
                    data: { stroke: "red" }, // Warna garis kurva
                  }}
                />
                {/* Kurva Fungsi Permintaan 2*/}
                <VictoryLine
                  data={data3}
                  x="Q" // Menggunakan Quantity sebagai sumbu X
                  y="P" // Menggunakan Price sebagai sumbu Y
                  style={{
                    data: { stroke: "blue" }, // Warna garis kurva
                  }}
                />
                {/* Kurva Fungsi Penawaran */}
                <VictoryLine
                  data={data2}
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
        <Footer />
      </div>
    </>
  );
};

export default ChangeInDemand;
