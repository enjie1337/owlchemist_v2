import React, { useState } from "react";

import "./ShardForm.css";
const ShardForm = () => {
  const [rarity, setRarity] = useState(" ");

  const rarityHandler = (event) => {
    setRarity(event.target.value);
    console.log(`Selected Shard recipe: ${event.target.value}`);
  };

  return (
    <form>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/rare.png" alt=""></img>
        <input
          type="radio"
          value="rare"
          name="shard"
          onChange={rarityHandler}
        />
        Rare: Transmute 2 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/epic.png" alt=""></img>
        <input
          type="radio"
          value="epic"
          name="shard"
          onChange={rarityHandler}
        />
        Epic: Transmute 10 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/legendary.png" alt=""></img>
        <input
          type="radio"
          value="legendary"
          name="shard"
          onChange={rarityHandler}
        />
        Legendary: Transmute 30 NFTs into 1 Legendary Founder's Shard
      </label>
    </form>
  );
};

export default ShardForm;
