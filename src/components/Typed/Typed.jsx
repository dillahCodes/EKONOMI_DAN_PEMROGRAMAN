import React from "react";
import Typed from "typed.js";
function TypedJs() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "demand function (fungsi permintaan)",
        "supply function (fungsi penawaran)",
        "market equilibrium (keseimbangan pasar)",
        "Change in Demand  (perubahan fungsi permintaan)",
        "Change in Supply  (perubahan fungsi penawaran)",
        "Change in Supply and Demand  (perubahan fungsi penawaran)",
        "Tax Incidence on Market Equilibrium  (Pengaruh Pajak Terhadap Keseimbangan Pasar)",
        "Impact of Subsidy on Market Equilibrium (Pengaruh Subsidi Terhadap Keseimbangan Pasar)",
      ],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypedJs;
