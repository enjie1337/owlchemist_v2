import React from "react";

import SingleNFT from "./SingleNFT";
import "./NFTContainer.css";

const NFTContainer = (props) => {
  return (
    <div className="nftWrapper">
      <h2>Select NFTs to transmute:</h2>
      <div className="nftContainer">
        <SingleNFT
          type={props.nfts[0].attributes[1].value}
          id={props.nfts[0].name.split("#").pop()}
          img={props.nfts[0].image}
        />
        <SingleNFT
          type={props.nfts[1].attributes[1].value}
          id={props.nfts[1].name.split("#").pop()}
          img={props.nfts[1].image}
        />
        <SingleNFT
          type={props.nfts[2].attributes[1].value}
          id={props.nfts[2].name.split("#").pop()}
          img={props.nfts[2].image}
        />
        <SingleNFT
          type={props.nfts[3].attributes[1].value}
          id={props.nfts[3].name.split("#").pop()}
          img={props.nfts[3].image}
        />
        <SingleNFT
          type={props.nfts[4].attributes[1].value}
          id={props.nfts[4].name.split("#").pop()}
          img={props.nfts[4].image}
        />
        <SingleNFT
          type={props.nfts[5].attributes[1].value}
          id={props.nfts[5].name.split("#").pop()}
          img={props.nfts[5].image}
        />
        <SingleNFT
          type={props.nfts[6].attributes[1].value}
          id={props.nfts[6].name.split("#").pop()}
          img={props.nfts[6].image}
        />
        <SingleNFT
          type={props.nfts[7].attributes[1].value}
          id={props.nfts[7].name.split("#").pop()}
          img={props.nfts[7].image}
        />
        <SingleNFT
          type={props.nfts[8].attributes[1].value}
          id={props.nfts[8].name.split("#").pop()}
          img={props.nfts[8].image}
        />
      </div>
    </div>
  );
};

export default NFTContainer;
