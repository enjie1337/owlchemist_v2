import React from "react";

import SingleNFT from "./SingleNFT";
import "./NFTContainer.css";

const NFTContainer = (props) => {
  return (
    <div>
      <h3>Select NFTs to transmute:</h3>
      <div className="nftContainer">
        {props.nfts.map((nfts) => (
          <SingleNFT
            key={nfts.name}
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
