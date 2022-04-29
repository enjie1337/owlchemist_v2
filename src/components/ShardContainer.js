import React from "react";

import "./ShardContainer.css";

const ShardContainer = () => {
  return (
    <div>
      <h3>Select Shard recipe:</h3>
      <div className="shardContainer">
        <div>
          <label>
            <input type="radio" value="rare" name="shard" />
            Transmute 2 NFTs into 1 Rare Founder's Shard
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="epic" name="shard" />
            Transmute 10 NFTs into 1 Rare Founder's Shard
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="legendary" name="shard" />
            Transmute 30 NFTs into 1 Legendary Founder's Shard
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShardContainer;
