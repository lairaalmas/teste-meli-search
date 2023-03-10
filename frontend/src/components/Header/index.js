import { Link } from "react-router-dom";

import "../../styles/css/Header.min.css";
import logoSrc from "../../assets/logo_small.png";

const Header = ({ children }) => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logoSrc} alt="Mercado Libre" />
        <span className="visually-hidden">Mercado Libre</span>
      </Link>
      {children}
    </header>
  );
};

export default Header;
