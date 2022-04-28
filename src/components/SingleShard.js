import React, { useState } from "react";

import "./SingleShard.css";

const SingleShard = (props) => {
  const [isActive, setActive] = useState(false);

  const selectHandler = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={isActive ? "shardBoxActive" : "shardBox"}
      onClick={selectHandler}
    >
      <img className="shardImage" src={props.image} />
      <h4 className="shardRarity">{props.rarity}</h4>
    </div>
  );
};

export default SingleShard;
