import React, { useState } from "react";
import Fuel from "./Fuel";
import Home from "./Home";

export default function Index() {
  const [showFuel, setShowFuel] = useState(false);

  const handleFuelClick = () => {
    setShowFuel(true);
  };

  return (
    <div>
      {showFuel ? <Fuel /> : <Home handleFuelClick={handleFuelClick} />}
    </div>
  );
}
