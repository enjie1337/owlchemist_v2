import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer";

function App() {
  // nfts array is temporary, we need to get the nfts after wallet connects...
  const nfts = [
    {
      attributes: [
        { trait_type: "Background", value: "Purple" },
        { trait_type: "Type", value: "Albino" },
        { trait_type: "Hat", value: "Goku" },
        { trait_type: "Eyes", value: "Sports" },
        { trait_type: "Mouth", value: "Gangsta" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/Dy3J0AT3gMF6EBIYTPtjeQMgStZlgoCqGVTD5HgCVw4?ext=png",
      name: "Alex Venegas #326",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: " ",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Yellow" },
        { trait_type: "Type", value: "Cream" },
        { trait_type: "Hat", value: "BlackCap" },
        { trait_type: "Eyes", value: "Regular" },
        { trait_type: "Mouth", value: "Winning" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/4mpGC-pCUrlQP_GmS-Nntso4TKdhGORrsZoGormvMzs?ext=png",
      name: "Bingo #901",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Mint" },
        { trait_type: "Type", value: "Slime" },
        { trait_type: "Hat", value: "SolHat" },
        { trait_type: "Eyes", value: "Regular" },
        { trait_type: "Mouth", value: "Fat smile" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/t0QdLye6zfvxUMw6HGFRI4RLXFj_CCZFJC6jNX5dFew?ext=png",
      name: "Slimeball #181",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Purple" },
        { trait_type: "Type", value: "Smurf" },
        { trait_type: "Hat", value: "YellowCap" },
        { trait_type: "Eyes", value: "Mono" },
        { trait_type: "Mouth", value: "OH" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/tiQvmNf5H-gIHCc-clKKRFXUPZHYjgqFSgSZLt1ddAY?ext=png",
      name: "Deliverboy Slim #1249",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Orange" },
        { trait_type: "Type", value: "Magma" },
        { trait_type: "Hat", value: "YellowCap" },
        { trait_type: "Eyes", value: "Cute" },
        { trait_type: "Mouth", value: "OH" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/vGIraZ65wSrFolt4bD4dq5f45r4eKol3GnSU8-hW7i4?ext=png",
      name: "Fartima #1085",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Blue" },
        { trait_type: "Type", value: "Albino" },
        { trait_type: "Hat", value: "SolBeanie" },
        { trait_type: "Eyes", value: "Regular" },
        { trait_type: "Mouth", value: "Gangsta" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/taI5Fhtc6CU2EJDR7ZlXMfwmLQLrwdIGzINpKLiAObw?ext=png",
      name: "Slim Shitty #71",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Purple" },
        { trait_type: "Type", value: "Cream" },
        { trait_type: "Hat", value: "YellowCap" },
        { trait_type: "Eyes", value: "3D" },
        { trait_type: "Mouth", value: "Fat smile" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/lqsv0m_7M9PEtqMJ_SKgsPa6q58A2hZmS0CQrfrANvE?ext=png",
      name: "Chad Bronson #1251",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Purple" },
        { trait_type: "Type", value: "Slime" },
        { trait_type: "Hat", value: "Rainbow" },
        { trait_type: "Eyes", value: "Nerd" },
        { trait_type: "Mouth", value: "Pog" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/fH-XHnu-7l-PVcHNrjB3PMUQMWGxeZFOKjdT8Deia70?ext=png",
      name: "Dumbo #141",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
    {
      attributes: [
        { trait_type: "Background", value: "Blue" },
        { trait_type: "Type", value: "Slime" },
        { trait_type: "Hat", value: "BlueCap" },
        { trait_type: "Eyes", value: "Mono" },
        { trait_type: "Mouth", value: "Happy" },
      ],
      category: "image",
      collection: { family: "The Business", name: "The Business" },
      description: "This is The Business",
      external_url: "https://theshit.io/",
      image:
        "https://www.arweave.net/BOp_-8w7UGKFuBGhMvx1ReVCJjmGEz98tIb8DoyN2uw?ext=png",
      name: "Franz #826",
      properties: {
        category: "image",
        creators: [
          {
            address: "CVFF8QcXAPCfmjtYFNcYgutThzxAdo7QQTxypGpqpREJ",
            share: 100,
          },
        ],
      },
      seller_fee_basis_points: 500,
      symbol: "",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main nfts={nfts}></Main>
      <Footer />
    </div>
  );
}
export default App;
