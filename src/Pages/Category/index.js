import { Link, NavLink, useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import "./category.css";
import FeatherIcon from "feather-icons-react";

export default function CategoryPage() {
  const { products } = useProduct();
  const param = useParams();

  const listToByCategories = products
    .filter((product) => product.category === param.categoryname)
    .map((product) => {
      return (
        <Link
          to={`/category/${product.category}/${product.id}`}
          className="card w-96"
          key={product.id}
        >
          <div className="content">
            <img src={product.imgUrl} alt="copy" />
          </div>
          <div className="footer flex items-center flex-col gap-2 pt-2">
            <p className="font-mono text-2xl"> {product.name} </p>
            <div className="text-slate-500 text-lg font-mono">
              <FeatherIcon icon="dollar-sign" className="inline-block" />
              <p className="inline-block align-middle">{product.price} USD</p>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div className="flex container mx-auto mt-20">
      <div style={{ width: "30%" }}>
        <div className="card mb-8">
          <div className="heading">
            <div className="capitalize text-3xl mb-6 font-thin title">
              {param.categoryname}
            </div>
          </div>
          <div className="body">
            <p className="text-sm text-gray-500 indent-8 leading-6 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae facere blanditiis debitis beatae delectus alias
              distinctio aliquam doloremque voluptatem enim, magnam officiis
              velit magni veritatis atque, voluptates soluta eos ullam?
            </p>
          </div>
        </div>
        <div className="card mb-8">
          <div className="heading">
            <div className="capitalize text-3xl mb-6 font-thin title">
              categories
            </div>
          </div>
          <div className="body">
            <div className="flex flex-col text-gray-500 gap-4">
              <NavLink
                to={"/category/accessories"}
                end
                style={({ isActive }) => {
                  return isActive
                    ? { color: "black", fontWeight: "bold" }
                    : { color: "gray" };
                }}
              >
                Accessories
              </NavLink>
              <NavLink
                to={"/category/jewelry"}
                style={({ isActive }) => {
                  return isActive
                    ? { color: "black", fontWeight: "bold" }
                    : { color: "gray" };
                }}
              >
                Jewelry
              </NavLink>
              <NavLink
                to={"/category/bags"}
                style={({ isActive }) => {
                  return isActive
                    ? { color: "black", fontWeight: "bold" }
                    : { color: "gray" };
                }}
              >
                Bags
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "70%" }} className="px-20">
        <div className="flex gap-6 flex-wrap justify-center">
          {listToByCategories}
        </div>
      </div>
    </div>
  );
}
