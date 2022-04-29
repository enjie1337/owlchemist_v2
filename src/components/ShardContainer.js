import React from "react";
import RarityForm from "./RarityForm";

import "./ShardContainer.css";

const ShardContainer = () => {
  return (
    <div>
      <h3>Select Shard recipe:</h3>
      <div className="shardContainer">
        <RarityForm />
      </div>
    </div>
  );
};

export default ShardContainer;
