import React from "react";
import NFTContainer from "../NFTs/NFTContainer";
import ShardContainer from "../Shards/ShardContainer";
import TransmuteButton from "../Transmute/TransmuteButton";

import "./Main.css";

const Main = (props) => {
  return (
    <div className="mainWrapper">
      <NFTContainer nfts={props.nfts}></NFTContainer>
      <ShardContainer />
      <TransmuteButton />
    </div>
  );
};

export default Main;
