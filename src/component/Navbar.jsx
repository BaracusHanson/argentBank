import { Link } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.png";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        {/* <a className="main-nav-item" href="./sign-in.html"></a> */}
      </div>
    </nav>
  );
};

export default Navbar;
