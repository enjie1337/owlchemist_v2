import React, { useState } from "react";
import SingleNFT from "./SingleNFT";

import "./NFTContainer.css";

const NFTContainer = (props) => {
  const [selected, setSelected] = useState();
  const changeSelection = (selectedNFT) => {
    setSelected(selectedNFT);
    console.log(selectedNFT);
  };

  return (
    <div>
      <h3>Select NFTs to transmute: {selected}</h3>
      <div className="nftContainer">
        {props.nfts.map((nfts) => (
          <SingleNFT
            key={nfts.name}
            type={nfts.attributes[1].value}
            id={nfts.name.split("#").pop()}
            img={nfts.image}
            onNFTSelect={changeSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTContainer;
