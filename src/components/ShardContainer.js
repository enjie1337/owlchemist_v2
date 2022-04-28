import React from "react";

import SingleShard from "./SingleShard";
import "./ShardContainer.css";

const ShardContainer = (props) => {
  return (
    <div className="shardWrapper">
      <h2>Select Founder's Shard:</h2>
      <div className="shardContainer">
        <SingleShard
          rarity={props.shards[0].rarity}
          image={props.shards[0].image}
        />
        <SingleShard
          rarity={props.shards[1].rarity}
          image={props.shards[1].image}
        />
        <SingleShard
          rarity={props.shards[2].rarity}
          image={props.shards[2].image}
        />
      </div>
    </div>
  );
};

export default ShardContainer;
