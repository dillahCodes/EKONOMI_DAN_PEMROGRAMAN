import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ChangeInDemand = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F5F5F5] dark:bg-slate-800">
        <h1 className="py-5 text-xl text-black dark:text-slate-300 sm:text-2xl md:text-3xl font-Oswald">Change In Demand (Perubahan Fungsi Permintaan)</h1>
        <div className="w-full p-5 gap-y-5 flex flex-col md:w-[80%] lg:w-[70%] rounded-lg bg-[#ebebeb]  dark:bg-gray-700 shadow-md dark:shadow-black"></div>
      </div>
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default ChangeInDemand;
