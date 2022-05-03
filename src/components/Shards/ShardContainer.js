import React, { useState } from "react";
import ShardForm from "./ShardForm";

import "./ShardContainer.css";

const ShardContainer = () => {
  const [rarity, setRarity] = useState();

  const changeRarity = (selectedRarity) => {
    setRarity(selectedRarity);
  };

  return (
    <div>
      <h3>Select Shard recipe: {rarity} </h3>
      <div className="shardContainer">
        <ShardForm onShardSelect={changeRarity} />
      </div>
    </div>
  );
};

export default ShardContainer;
