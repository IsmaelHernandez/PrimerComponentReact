import React, { useState } from "react";

function Lamp() {
  const [onOff, setOnOff] = useState("off");

  const encender = () => {
    if (onOff === "off") {
      setOnOff("on");
    } else {
      setOnOff("off");
    }
  };
  return (
    <div>
      <div className={`circle ${onOff}`}></div>
      <button onClick={encender} className="btn">
        onOff
      </button>
    </div>
  );
}

export default Lamp;
