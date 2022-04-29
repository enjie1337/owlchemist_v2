import React from "react";

import SingleShard from "./SingleShard";
import "./ShardContainer.css";

const ShardContainer = (props) => {
  return (
    <div className="shardWrapper">
      <h2>Select Founder's Shard:</h2>
      <div className="shardContainer">
        {props.shards.map((shards) => (
          <SingleShard rarity={shards.rarity} image={shards.image} />
        ))}
      </div>
    </div>
  );
};

export default ShardContainer;
