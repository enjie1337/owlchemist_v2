import React from "react";
import ConnectButton from "./ConnectButton";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1>The Owlchemist has arrived..</h1>
      <ConnectButton />
    </div>
  );
};

export default Header;
