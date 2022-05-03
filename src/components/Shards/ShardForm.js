import React from "react";

import "./ShardForm.css";
const ShardForm = (props) => {
  const selectHandler = (event) => {
    props.onShardSelect(event.target.value);
  };

  return (
    <form onChange={selectHandler}>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/rare.png" alt=""></img>
        <input type="radio" value="Rare" name="shard" />
        Rare: Transmute 2 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/epic.png" alt=""></img>
        <input type="radio" value="Epic" name="shard" />
        Epic: Transmute 10 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/legendary.png" alt=""></img>
        <input type="radio" value="Legendary" name="shard" />
        Legendary: Transmute 30 NFTs into 1 Legendary Founder's Shard
      </label>
    </form>
  );
};

export default ShardForm;
