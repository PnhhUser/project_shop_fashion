import { Link, NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

export default function Navbar() {
  return (
    <div className="flex container mx-auto py-5">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </div>
  );
}

const Logo = () => {
  return (
    <div className="flex items-end" style={{ flex: "1" }}>
      <div className="w-20">
        <img
          src="https://assets.website-files.com/5bb62929f4d1fd759a1dce2a/5e95b6ecc9fce1ac7d34adbd_frelogo.png"
          alt="copy"
        />
      </div>
      <p className="text-sm text-gray-600">eCommerce Template</p>
    </div>
  );
};

const Nav = () => {
  return (
    <nav
      className="flex items-center justify-center gap-10 text-ms font-bold"
      style={{ flex: "1" }}
    >
      <NavLink to="/"> Home </NavLink>
      <NavLink to="contact"> Contact </NavLink>
      <NavLink to="shop"> Login </NavLink>
      <NavLink to="cart" className="flex">
        <FeatherIcon icon="shopping-cart" />
        <span
          className="bg-red-600 w-5 h-5 rounded-full text-white text-center"
          style={{ fontSize: "12px", lineHeight: "1.25rem" }}
        >
          0
        </span>
      </NavLink>
    </nav>
  );
};
