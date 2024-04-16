import { Link } from "react-router-dom";
import BannerHome from "../../Components/Banner";
import { useProduct } from "../../Context/ProductContext";
import FeatherIcon from "feather-icons-react";

const brands = [
  {
    id: 1,
    urlImg:
      "https://i.pinimg.com/564x/79/78/85/79788527f3f126e9cf898faaac41f156.jpg",
  },
  {
    id: 2,
    urlImg:
      "https://i.pinimg.com/564x/29/70/1a/29701a938d3be4bf4a49d9dea417a608.jpg",
  },
  {
    id: 3,
    urlImg:
      "https://i.pinimg.com/564x/e6/3b/03/e63b03b01e6ffd8d4d511e1538989dc6.jpg",
  },
  {
    id: 4,
    urlImg:
      "https://i.pinimg.com/564x/1b/69/fb/1b69fb23a2b641ceafebd0457533f888.jpg",
  },
  {
    id: 5,
    urlImg:
      "https://i.pinimg.com/564x/77/e1/89/77e1894b73e2ec49723dd0579f8f83e7.jpg",
  },
  {
    id: 6,
    urlImg:
      "https://i.pinimg.com/564x/ca/f9/06/caf906ebcccd62f1d91135c1b89eeb29.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <BannerHome />
      <SessionCategory />
      <SessionProduct />
      <SessionBrands />
    </div>
  );
}

const SessionCategory = function () {
  return (
    <div className="flex gap-10 mt-10">
      <Link
        to={"category/accessories"}
        className="bg-stone-900 flex-1 text-white flex justify-end items-end text-3xl pb-2 pr-2 h-24"
      >
        Accessories
      </Link>
      <Link
        to={"category/jewelry"}
        className="bg-stone-900 flex-1 text-white  flex justify-end items-end text-3xl pb-2 pr-2 h-24"
      >
        Jewelry
      </Link>
      <Link
        to={"category/bags"}
        className="bg-stone-900 flex-1 text-white flex justify-end items-end text-3xl pb-2 pr-2 h-24"
      >
        Bags
      </Link>
    </div>
  );
};

const SessionProduct = function () {
  const { products } = useProduct();

  const listProducts = products.map((product) => {
    return (
      <Link
        to={`/category/${product.category}/${product.id}`}
        className="card w-96 opacity-75 hover:opacity-100 transition-opacity"
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
    <div className="flex flex-col mt-20">
      <div className="text-center text-4xl font-thin mb-14">
        Featured Products
      </div>
      <div className="flex gap-6 flex-wrap justify-center">{listProducts}</div>
    </div>
  );
};

const SessionBrands = function () {
  const listBrands = brands.map((brand) => {
    return (
      <div className="card w-24" key={brand.id}>
        <div className="content">
          <img src={brand.urlImg} alt="copy" />
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col mt-20">
      <div className="text-center text-4xl font-thin mb-14">Our Brands</div>
      <div className="flex gap-6 flex-wrap justify-center">{listBrands}</div>
    </div>
  );
};
