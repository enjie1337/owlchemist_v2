import React from "react";

import "./TransmuteButton.css";

const TransmutateButton = () => {
  const btnClickHandler = (events) => {
    console.log(events);
  };

  return (
    <button onClick={btnClickHandler} className="btnTransmute">
      TRANSMUTE
    </button>
  );
};

export default TransmutateButton;
