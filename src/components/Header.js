import ConnectButton from "./ConnectButton";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1>The Owlchemist</h1>
      <ConnectButton />
    </div>
  );
};

export default Header;
