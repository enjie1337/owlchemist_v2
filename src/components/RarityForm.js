import React from "react";

import "./RarityForm.css";
const RarityForm = () => {
  return (
    <form>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/rare.png" alt=""></img>
        <input type="radio" value="rare" name="shard" />
        Transmute 2 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/epic.png" alt=""></img>
        <input type="radio" value="epic" name="shard" />
        Transmute 10 NFTs into 1 Rare Founder's Shard
      </label>
      <label className="transmuteOption">
        <img className="shardImage" src="./img/legendary.png" alt=""></img>
        <input type="radio" value="legendary" name="shard" />
        Transmute 30 NFTs into 1 Legendary Founder's Shard
      </label>
    </form>
  );
};

export default RarityForm;
