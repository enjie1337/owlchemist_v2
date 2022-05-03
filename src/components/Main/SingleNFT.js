import React, { useState } from "react";

import "./SingleNFT.css";

const SingleNFT = (props) => {
  const [isActive, setActive] = useState(false);
  const [selection, setSelection] = useState(" ");

  const selectHandler = (event) => {
    setActive(!isActive);
    console.log(`Click on: ${event.target.src}`);
  };

  return (
    <div
      className={isActive ? "singleBoxActive" : "singleBox"}
      onClick={selectHandler}
    >
      <img className="singleImage" src={props.img} />
      <h4 className="singleId">#{props.id}</h4>
      <p className="singleType">
        <b>Type:</b>
        <br />
        {props.type}
      </p>
    </div>
  );
};

export default SingleNFT;
