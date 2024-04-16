import { Link, NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useCart } from "../../Context/ProductContext";

const removeSameWithId = (arr) => {
  return arr.reduce((accumulator, current) => {
    let exists = accumulator.find((item) => {
      return item.productId === current.productId;
    });
    if (!exists) {
      accumulator = accumulator.concat(current);
    }
    return accumulator;
  }, []);
};

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
  let { carts } = useCart();

  carts = [...carts].reverse();

  const productsInCart = removeSameWithId(carts);

  const quantity = productsInCart.map((p) => p.quantity);

  const sumQuantity = quantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <nav
      className="flex items-center justify-center gap-10 text-ms font-bold"
      style={{ flex: "1" }}
    >
      <NavLink to="/"> Home </NavLink>
      {/* <NavLink to="contact"> Contact </NavLink> */}
      <NavLink to="login"> Login </NavLink>
      <NavLink to="cart" className="flex">
        <FeatherIcon icon="shopping-cart" />
        <span
          className="bg-red-600 w-5 h-5 rounded-full text-white text-center"
          style={{ fontSize: "12px", lineHeight: "1.25rem" }}
        >
          {sumQuantity}
        </span>
      </NavLink>
    </nav>
  );
};
