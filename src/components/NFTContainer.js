import React from "react";

import SingleNFT from "./SingleNFT";
import "./NFTContainer.css";

const NFTContainer = (props) => {
  return (
    <div className="nftWrapper">
      <h2>Select NFTs to transmute:</h2>
      <div className="nftContainer">
        {props.nfts.map((nfts) => (
          <SingleNFT
            type={nfts.attributes[1].value}
            id={nfts.name.split("#").pop()}
            img={nfts.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTContainer;
