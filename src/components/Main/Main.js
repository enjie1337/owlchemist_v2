import React from "react";
import NFTContainer from "./NFTContainer";
import ShardContainer from "./ShardContainer.js";
import TransmuteButton from "./TransmuteButton";

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
