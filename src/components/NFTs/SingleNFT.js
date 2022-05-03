import React, { useState } from "react";

import "./SingleNFT.css";

const SingleNFT = (props) => {
  const [active, setActive] = useState(false);

  const selectHandler = () => {
    setActive(!active);
    let source;
    !active ? (source = props.img) : (source = "");

    props.onNFTSelect(source);
  };

  return (
    <div
      className={active ? "singleBoxActive" : "singleBox"}
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
