import React from "react";
import Typed from "typed.js";
function TypedJs() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["demand function (fungsi permintaan)", "supply function (fungsi penawaran)", "market equilibrium (keseimbangan pasar)"],
      typeSpeed: 30,
      backSpeed: 30,
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
