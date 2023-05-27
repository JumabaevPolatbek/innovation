import { Link } from "react-router-dom";
import HeaderBottom from "../../components/HeaderBottom";
import HeaderMiddle from "../../components/HeaderMiddle";
import HeaderTop from "../../components/HeaderTop";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <Link to="/" className="logo">
        <img src="/images/NII.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
