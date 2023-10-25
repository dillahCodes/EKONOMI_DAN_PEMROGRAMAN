import { MathComponent } from "mathjax-react";
import { Footer } from "../components/Footer/Footer";
import ChangeInSupplyTable from "../components/Table/TableChangeInSupply";
import { useState } from "react";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from "victory";
import RulesComponent from "../components/Rules/Rules";

const ChangeInSupply = () => {
  const [ALL_VALUE_FROM_INPUT, SET_ALL_VALUE_FROM_INPUT] = useState();
  console.info(ALL_VALUE_FROM_INPUT);

  // MAIN VARIABLES HERE
  let QD_A, QD_B, QS_A_NEW, QS_B_NEW, QS_A_OLD, QS_B_OLD;
  if (ALL_VALUE_FROM_INPUT !== undefined) {
    QD_A = ALL_VALUE_FROM_INPUT[0].QD_A;
    ALL_VALUE_FROM_INPUT[1]?.QD_B ? (QD_B = parseFloat(ALL_VALUE_FROM_INPUT[1].QD_B.replace(",", "."))) : undefined;
    QS_A_OLD = ALL_VALUE_FROM_INPUT[2].QS_A_OLD;
    ALL_VALUE_FROM_INPUT[3]?.QS_B_OLD ? (QS_B_OLD = parseFloat(ALL_VALUE_FROM_INPUT[3].QS_B_OLD.replace(",", "."))) : undefined;
    QS_A_NEW = ALL_VALUE_FROM_INPUT[4].QS_A_NEW;
    ALL_VALUE_FROM_INPUT[5]?.QS_B_NEW ? (QS_B_NEW = parseFloat(ALL_VALUE_FROM_INPUT[5].QS_B_NEW.replace(",", "."))) : undefined;
  }
  // VARIABLE FOR VERIFICATION
  const variablesToCheck = [QD_A, QD_B, QS_A_NEW, QS_B_NEW, QS_A_OLD, QS_B_OLD];
  // MARKET Equilibrium OLD HERE
  let EQ_PRICE_OLD = (parseFloat(QD_A) + (QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD))) / ((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_OLD).toFixed(1);
  let EQ_QD_OLD = parseFloat(QD_A) + QD_B * EQ_PRICE_OLD;
  let EQ_QS_OLD = parseFloat(QS_A_OLD) + QS_B_OLD * EQ_PRICE_OLD;
  // MARKET Equilibrium NEW HERE
  let EQ_PRICE_NEW = (parseFloat(QD_A) + (QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW))) / ((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_NEW).toFixed(1);
  let EQ_QD_NEW = parseFloat(QD_A) + QD_B * EQ_PRICE_NEW;
  let EQ_QS_NEW = parseFloat(QS_A_NEW) + QS_B_NEW * EQ_PRICE_NEW;
  // QD  DATA HERE
  let QD_Q_IF_P0 = QD_A - QD_B * 0;
  let QD_P_IF_Q0 = `${QD_A / (QD_B > 0 ? -QD_B : Math.abs(QD_B))}`;
  const data1 = [
    { Q: parseFloat(QD_Q_IF_P0), P: 0 },
    { Q: 0, P: parseFloat(QD_P_IF_Q0) },
  ];
  // Qs DATA OLD HERE
  let QS_OLD_Q_IF_P0 = QS_A_OLD - QS_B_OLD * 0;
  let QS_OLD_P_IF_Q0 = QS_A_OLD / (QS_B_OLD > 0 ? -QS_B_OLD : Math.abs(QS_B_OLD));
  const data2 = [
    { Q: QS_OLD_Q_IF_P0, P: 0 },
    { Q: 0, P: QS_OLD_P_IF_Q0 },
    { Q: EQ_QD_OLD * 2, P: QS_OLD_P_IF_Q0 + (EQ_PRICE_OLD - QS_OLD_P_IF_Q0) * 2 },
  ];
  // Qs DATA NEW HERE
  let QS_NEW_Q_IF_P0 = QS_A_NEW - QS_B_NEW * 0;
  let QS_NEW_P_IF_Q0 = QS_A_NEW / (QS_B_NEW > 0 ? -QS_B_NEW : Math.abs(QS_B_NEW));
  const data3 = [
    { Q: QS_NEW_Q_IF_P0, P: 0 },
    { Q: 0, P: QS_NEW_P_IF_Q0 },
    { Q: EQ_QD_NEW * 2, P: QS_NEW_P_IF_Q0 + (EQ_PRICE_NEW - QS_NEW_P_IF_Q0) * 2 },
  ];

  console.info(data1);
  console.info(data2);
  console.info(data3);
  return (
    <>
      <div className="flex items-center  pt-24   flex-col gap-y-5 min-h-screen   justify-between w-full  text-black dark:text-slate-300    bg-[#F5F5F5] dark:bg-slate-800 transition-all  ease-out duration-700">
        <h1 className="my-5 text-xl text-center text-black px-3s dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Change in supply (perubahan fungsi penawaran)</h1>
        <div className="w-full  p-5 gap-y-5 flex mb-10 flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb] dark:bg-gray-700 shadow-md dark:shadow-black">
          {/* Isi komponen di sini */}
          <ChangeInSupplyTable getAllValue={SET_ALL_VALUE_FROM_INPUT} />
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 overflow-x-scroll">
            <span className="font-bold capitalize font-Kanit">result :</span>
            {variablesToCheck.every((variable) => variable !== undefined) ? (
              <div className={`${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
                <div className="border-[2px] text-base  rounded-md border-[#4cb0af] p-2 mt-2">
                  <span className="font-bold capitalize font-Kanit"> Market Equilibrium (OLD)</span>{" "}
                  <span className="text-red-500">
                    <MathComponent tex={String.raw`Qs1 = ${QS_A_OLD} ${QS_B_OLD > 0 ? "+" : ""} ${QS_B_OLD}P`} />
                  </span>
                  <MathComponent tex={String.raw`P =${EQ_PRICE_OLD}  `} />
                  <MathComponent tex={String.raw`Qd =${EQ_QD_OLD}  `} />
                  <MathComponent tex={String.raw`Qs =${EQ_QS_OLD}  `} />
                </div>
                <div className="border-[2px] text-base  rounded-md border-[#4cb0af] p-2 mt-3">
                  <span className="font-bold capitalize font-Kanit"> Market Equilibrium (NEW)</span>{" "}
                  <span className="text-blue-500">
                    <MathComponent tex={String.raw`Qs2 = ${QS_A_NEW} ${QS_B_NEW > 0 ? "+" : ""} ${QS_B_NEW}P  `} />
                  </span>
                  <MathComponent tex={String.raw`P =${EQ_PRICE_NEW}  `} />
                  <MathComponent tex={String.raw`Qd =${EQ_QD_NEW}  `} />
                  <MathComponent tex={String.raw`Qs =${EQ_QS_NEW}  `} />
                </div>
              </div>
            ) : (
              <RulesComponent inputRule={"input tidak boleh ada yang kosong"} inputRuleEng={"input cannot be empty"} priceRule={"harga ke2 tidak boleh lebih kecil dari harga ke1"} priceRuleEng={"The 2nd price cannot be smaller than the 1st price"} />
            )}
          </div>
          <div className="border-[2px] rounded-md border-[#4cb0af] p-2 ">
            <span className="font-bold capitalize font-Kanit">method :</span>
            <div className={`p-4 mt-2 rounded-md border-[2px]  border-[#4cb0af] ${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
              <div className={`flex flex-col overflow-x-scroll text-xs gap-y-0 `}>
                <span className="text-base font-bold capitalize font-Kanit">Market Equilibrium (OLD)</span>
                <MathComponent tex={String.raw`Qd = Qs`} />
                <div className="flex gap-x-1">
                  {" "}
                  <span className="text-red-500">
                    <MathComponent tex={String.raw`${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}P =`} />
                  </span>
                  <span className="text-yellow-500">
                    <MathComponent tex={String.raw` ${QS_A_OLD} ${QS_B_OLD > 0 ? "+" : ""} ${QS_B_OLD}P `} />
                  </span>
                </div>
                <MathComponent tex={String.raw`${QD_A} ${(QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD)) > 0 ? "+" : ""} ${QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD)} = ${QD_B > 0 ? -QD_B : Math.abs(QD_B)}p ${QS_B_OLD > 0 ? "+" : ""}  ${QS_B_OLD}p  `} />
                <MathComponent tex={String.raw`${parseFloat(QD_A) + (QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD))} = ${((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_OLD).toFixed(1)}p  `} />
                <MathComponent tex={String.raw`p = \frac{${parseFloat(QD_A) + (QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD))}}{${((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_OLD).toFixed(1)}}  `} />
                <MathComponent tex={String.raw`p = ${(parseFloat(QD_A) + (QS_A_OLD > 0 ? -QS_A_OLD : Math.abs(QS_A_OLD))) / ((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_OLD).toFixed(1)}  `} />
                <div className="mt-5 ml-10 text-xs">
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}P`} />
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}(${EQ_PRICE_OLD})`} />
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B * EQ_PRICE_OLD > 0 ? "+" : ""} ${QD_B * EQ_PRICE_OLD}`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QD_A) + QD_B * EQ_PRICE_OLD}`} />
                </div>
                <div className="mt-5 text-xs ml-14">
                  <span className="text-yellow-500">
                    <MathComponent tex={String.raw`Qs = ${QS_A_OLD} ${QS_B_OLD > 0 ? "+" : ""} ${QS_B_OLD}P`} />
                  </span>
                  <MathComponent tex={String.raw`Qs = ${QS_A_OLD} ${QS_B_OLD > 0 ? "+" : ""} ${QS_B_OLD}(${EQ_PRICE_OLD})`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A_OLD} ${QS_B_OLD * EQ_PRICE_OLD > 0 ? "+" : ""} ${QS_B_OLD * EQ_PRICE_OLD}`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QS_A_OLD) + QS_B_OLD * EQ_PRICE_OLD}`} />
                </div>
              </div>
            </div>
            <div className={`p-4 mt-2 rounded-md border-[2px]  border-[#4cb0af] ${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}`}>
              <div className={`flex flex-col overflow-x-scroll text-xs gap-y-0 `}>
                <span className="text-base font-bold capitalize font-Kanit">Market Equilibrium (NEW)</span>
                <MathComponent tex={String.raw`Qd = Qs`} />
                <div className="flex gap-x-1">
                  {" "}
                  <span className="text-red-500">
                    <MathComponent tex={String.raw`${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}P =`} />
                  </span>
                  <span className="text-green-500">
                    <MathComponent tex={String.raw` ${QS_A_NEW} ${QS_B_NEW > 0 ? "+" : ""} ${QS_B_NEW}P `} />
                  </span>
                </div>
                <MathComponent tex={String.raw`${QD_A} ${(QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW)) > 0 ? "+" : ""} ${QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW)} = ${QD_B > 0 ? -QD_B : Math.abs(QD_B)}p ${QS_B_NEW > 0 ? "+" : ""}  ${QS_B_NEW}p  `} />
                <MathComponent tex={String.raw`${parseFloat(QD_A) + (QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW))} = ${((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_NEW).toFixed(1)}p  `} />
                <MathComponent tex={String.raw`p = \frac{${parseFloat(QD_A) + (QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW))}}{${((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_NEW).toFixed(1)}}  `} />
                <MathComponent tex={String.raw`p = ${(parseFloat(QD_A) + (QS_A_NEW > 0 ? -QS_A_NEW : Math.abs(QS_A_NEW))) / ((QD_B > 0 ? -QD_B : Math.abs(QD_B)) + QS_B_NEW).toFixed(1)}  `} />
                <div className="mt-5 ml-10 text-xs">
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}P`} />
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}(${EQ_PRICE_NEW})`} />
                  <MathComponent tex={String.raw`Qd = ${QD_A} ${QD_B * EQ_PRICE_NEW > 0 ? "+" : ""} ${QD_B * EQ_PRICE_NEW}`} />
                  <MathComponent tex={String.raw`Qd = ${parseFloat(QD_A) + QD_B * EQ_PRICE_NEW}`} />
                </div>
                <div className="mt-5 text-xs ml-14">
                  <span className="text-green-500">
                    <MathComponent tex={String.raw`Qs = ${QS_A_NEW} ${QS_B_NEW > 0 ? "+" : ""} ${QS_B_NEW}P`} />
                  </span>
                  <MathComponent tex={String.raw`Qs = ${QS_A_NEW} ${QS_B_NEW > 0 ? "+" : ""} ${QS_B_NEW}(${EQ_PRICE_NEW})`} />
                  <MathComponent tex={String.raw`Qs = ${QS_A_NEW} ${QS_B_NEW * EQ_PRICE_NEW > 0 ? "+" : ""} ${QS_B_NEW * EQ_PRICE_NEW}`} />
                  <MathComponent tex={String.raw`Qs = ${parseFloat(QS_A_NEW) + QS_B_NEW * EQ_PRICE_NEW}`} />
                </div>
              </div>
            </div>
            {/* chart here */}
            <div className={`w-full border-[2px] border-[#4cb0af] my-2 rounded-md bg-white ${variablesToCheck.every((variable) => variable !== undefined) ? "" : "hidden"}  `}>
              <VictoryChart width={600} height={400} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                {/* Sumbu X (Quantity) */}
                <VictoryAxis
                  label="Quantity (Q)"
                  tickValues={[QS_OLD_Q_IF_P0, QS_NEW_Q_IF_P0, 0, EQ_QD_OLD, EQ_QD_NEW, QD_Q_IF_P0]} // Hapus label pada sumbu X
                  style={{
                    axisLabel: { padding: 36 }, // Jarak antara label sumbu X dengan chart
                    grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                  }}
                />
                {/* Sumbu Y (Price) */}
                <VictoryAxis
                  dependentAxis
                  label="Price (P)"
                  tickValues={[QS_OLD_P_IF_Q0, QS_NEW_P_IF_Q0, EQ_PRICE_OLD, EQ_PRICE_NEW, parseFloat(QD_P_IF_Q0)]} // Hapus label pada sumbu Y
                  style={{
                    axisLabel: { padding: 43 }, // Jarak antara label sumbu Y dengan chart
                    grid: { stroke: "lightgray", strokeWidth: 2, strokeOpacity: 0.4 },
                  }}
                />
                {/* Kurva Fungsi Permintaan*/}
                <VictoryLine
                  data={data1}
                  x="Q" // Menggunakan Quantity sebagai sumbu X
                  y="P" // Menggunakan Price sebagai sumbu Y
                  style={{
                    data: { stroke: "red" }, // Warna garis kurva
                  }}
                />
                {/* Kurva Fungsi penawaran 1*/}
                <VictoryLine
                  data={data2}
                  x="Q" // Menggunakan Quantity sebagai sumbu X
                  y="P" // Menggunakan Price sebagai sumbu Y
                  style={{
                    data: { stroke: "yellow" }, // Warna garis kurva
                  }}
                />
                {/* Kurva Fungsi Penawaran 2 */}
                <VictoryLine
                  data={data3}
                  x="Q" // Menggunakan Quantity sebagai sumbu X
                  y="P" // Menggunakan Price sebagai sumbu Y
                  style={{
                    data: { stroke: "green" }, // Warna garis kurva
                  }}
                />
                <VictoryLabel
                  text={`Qd = ${QD_A} ${QD_B > 0 ? "+" : ""} ${QD_B}`} // Teks yang ingin ditampilkan
                  x={120} // Koordinat x label
                  y={70} // Koordinat y label
                  textAnchor="middle" // Pusatkan teks
                  angle={0} // Putar teks sesuai kebutuhan
                  style={{ fill: "red" }} // Mengatur warna teks menjadi merah
                />
                <VictoryLabel
                  text={`Qd1 = ${QS_A_OLD} ${QS_B_OLD > 0 ? "+" : ""} ${QS_B_OLD}`} // Teks yang ingin ditampilkan
                  x={120} // Koordinat x label
                  y={90} // Koordinat y label
                  textAnchor="middle" // Pusatkan teks
                  angle={0} // Putar teks sesuai kebutuhan
                  style={{ fill: "yellow" }} // Mengatur warna teks menjadi merah
                />
                <VictoryLabel
                  text={`Qd2 = ${QS_A_NEW} ${QS_B_NEW > 0 ? "+" : ""} ${QS_B_NEW}`} // Teks yang ingin ditampilkan
                  x={120} // Koordinat x label
                  y={110} // Koordinat y label
                  textAnchor="middle" // Pusatkan teks
                  angle={0} // Putar teks sesuai kebutuhan
                  style={{ fill: "green" }} // Mengatur warna teks menjadi merah
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

export default ChangeInSupply;
