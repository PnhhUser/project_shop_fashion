import { useParams, Link } from "react-router-dom";
import { useCart, useProduct } from "../../Context/productContext";
import FeatherIcon from "feather-icons-react";
import { useEffect, useRef, useState } from "react";
const MAX_QUANTITY = 99;
const MIN_QUANTITY = 0;

export default function DetailProductPage() {
  const [quantity, setQuantity] = useState(0);
  const { products } = useProduct();
  const { id, categoryname } = useParams();
  const refQuantity = useRef();

  const { dispatch } = useCart();

  useEffect(() => {
    refQuantity.current.value = quantity;
  });

  const [product] = products.filter((product) => product.id === Number(id));

  const handleEventDecrease = () => {
    setQuantity((q) => {
      if (q <= MIN_QUANTITY) return MIN_QUANTITY;
      return q - 1;
    });
  };

  const handleEventIncrease = () => {
    setQuantity((q) => {
      if (q >= MAX_QUANTITY) return MAX_QUANTITY;
      return q + 1;
    });
  };

  const handleEventAddCart = () => {
    if (quantity > 0 && quantity <= 99) {
      dispatch({
        type: "ADD_CART",
        productId: product.id,
        quantity: quantity,
        imgUrl: product.imgUrl,
        productName: product.name,
        price: product.price,
      });
    }
  };

  return (
    <div className="flex container mx-auto">
      <div className="flex-1">
        <img alt="copy" src={product?.imgUrl} />
      </div>
      <div className="flex-1 px-10">
        <div className="heading">
          <Link
            to=".."
            relative="path"
            className="flex items-center text-gray-500 "
          >
            <FeatherIcon icon="chevron-left" strokeWidth={1} size={40} />
            <p className="text-sm font-bold">{categoryname}</p>
          </Link>
          <h3 className="font-bold text-4xl pl-8 mt-5">{product.name}</h3>
          <h3 className="font-thin text-lg pl-8 text-gray-500 mt-2">
            <FeatherIcon icon="dollar-sign" className="inline-block" />
            <p className="inline-block align-middle">{product.price} USD</p>
          </h3>
        </div>
        <div className="body pl-8 mt-3">
          <p className="text-md text-gray-500 leading-8">{product.desc}</p>
        </div>
        <div className="footer pl-8 mt-8">
          <div className="flex">
            <div className="flex-col">
              <label className="font-thin text-sm inline-block pb-2">
                Quantity
              </label>
              <br />
              <input
                type="text"
                className="btn-quantity"
                maxLength={2}
                defaultValue={quantity}
                ref={refQuantity}
              />
            </div>
            <div className="flex items-end">
              <FeatherIcon
                icon="minus-square"
                strokeWidth={1}
                className="cursor-pointer btn-decrease text-gray-500"
                onClick={handleEventDecrease}
              />
              <FeatherIcon
                icon="plus-square"
                strokeWidth={1}
                className="cursor-pointer btn-increase text-gray-500"
                onClick={handleEventIncrease}
              />
            </div>
          </div>
          <div
            onClick={handleEventAddCart}
            className="mt-5 flex items-end bg-stone-950 w-28 text-white text-nowrap py-3 justify-center capitalize cursor-pointer"
          >
            add to card
          </div>
        </div>
      </div>
    </div>
  );
}
