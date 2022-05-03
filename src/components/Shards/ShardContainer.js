import React from "react";
import ShardForm from "./ShardForm";

import "./ShardContainer.css";

const ShardContainer = () => {
  return (
    <div>
      <h3>Select Shard recipe: </h3>
      <div className="shardContainer">
        <ShardForm />
      </div>
    </div>
  );
};

export default ShardContainer;
