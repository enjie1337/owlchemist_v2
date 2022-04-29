import React from "react";
import NFTContainer from "./NFTContainer";
import ShardContainer from "./ShardContainer.js";

import "./Mid.css";

const Mid = (props) => {
  return (
    <div className="midWrapper">
      <NFTContainer nfts={props.nfts}></NFTContainer>
      <ShardContainer />
    </div>
  );
};

export default Mid;
