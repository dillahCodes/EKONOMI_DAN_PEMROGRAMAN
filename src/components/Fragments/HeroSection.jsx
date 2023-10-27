import TypedJs from "../Typed/Typed";

const HeroSection = () => {
  const scrollToElement = (elementId, offset) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen mt-5 w-full bg-[#F5F5F5] dark:bg-slate-800">
      <div className="absolute flex flex-row-reverse flex-wrap items-center justify-center w-full px-5 transform -translate-x-1/2 -translate-y-1/2 md:px-10 sm:justify-between top-1/2 left-1/2">
        <img src="/ekonomi3.png" alt="hero image" width={500} height={"auto"} className="mx-auto max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] rounded-lg" style={{ width: "500px", height: "auto" }} />
        <div className="px-10 mx-auto md:px-5">
          <h1 className="text-2xl font-bold text-black capitalize sm:text-3xl md:text-4xl font-Kanit dark:text-slate-300">Economics and Programming Project</h1>
          <div className="mt-5 text-sm text-black capitalize sm:text-lg font-Oswald dark:text-slate-300">
            searching and calculating : <TypedJs />
          </div>
          <button
            className="mt-10 btn text-xs sm:text-base px-2 sm:px-3 md:px-4 border-none hover:text-black hover:bg-[#ebebeb] dark:text-slate-300 bg-[#4cb0af] text-[#F5F5F5] dark:hover:text-slate-500"
            onClick={() => scrollToElement("features", 100)} // Ganti offset sesuai kebutuhan Anda
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
