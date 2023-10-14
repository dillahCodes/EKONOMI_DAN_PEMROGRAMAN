import FeatureCard from "../Card";

const FeaturesSection = () => {
  const featuresData = [
    { title: "demand function (fungsi permintaan)", description: ["calculate the demand function 🧮", "demand function curve 📉"], Url: "/demandFunction" },
    { title: "supply function (fungsi penawaran)", description: ["calculate the supply function🧮", "supply function curve📈"], Url: "/supplyFunction" },
    { title: "Market Equilibrium  (Keseimbangan Pasar) v1.0", description: ["calculate the Market Equilibrium with function🧮"], Url: "/marketEquilibrium" },
    { title: "Market Equilibrium  (Keseimbangan Pasar) v2.0", description: ["calculate the Market Equilibrium🧮", "Market Equilibrium curve📈"], Url: "/marketEquilibriumFullVersion" },
  ];

  return (
    <section id="features" className="flex  p-10 gap-y-7  flex-col  min-h-screen box-border items-center  justify-center w-full gap-2    bg-[#F5F5F5] dark:bg-slate-800 ">
      <h1 className="relative mb-5 text-center before:absolute before:w-full before:h-[3px]   before:bg-[#4cb0af] before:bottom-0 pb-1 capitalize font-Kanit text-3xl text-black dark:text-slate-300">features</h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 gap-y-6 dark:text-slate-300">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} description={feature.description} title={feature.title} url={feature.Url} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
