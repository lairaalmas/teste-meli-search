import { Link } from "react-router-dom";

import "../../css/Header.min.css";
import logoSrc from "../../assets/logo_small.png";
const Header = (props) => {
  return (
    <header className="Header">
      <Link to="">
        <img src={logoSrc} alt="Mercado Libre Logo." />
      </Link>
      {props.children}
    </header>
  );
};

export default Header;
