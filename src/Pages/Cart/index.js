import FeatherIcon from "feather-icons-react";
import { useCart } from "../../Context/productContext";
import "./cart.css";

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

export default function Cart() {
  let { carts, dispatch } = useCart();

  carts = [...carts].reverse();

  const productsInCart = removeSameWithId(carts);

  const totalMoney = productsInCart
    .map((p) => p.quantity * Number(p.price))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (productsInCart.length === 0) {
    return (
      <div
        className="absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-center text-4xl font-thin">
          You haven't bought anything yet
        </h1>
      </div>
    );
  }

  const handleEventRemove = (productId) => {
    dispatch({
      productId: productId,
      type: "REMOVE_PRODUCT",
    });
  };

  const cartList = productsInCart.map((product) => {
    return (
      <div
        className="flex mx-auto mt-10 flex-wrap gap-6"
        key={product.productId}
        style={{
          width: 1000,
        }}
      >
        <div
          className="flex items-center gap-6 p-0.5"
          style={{
            width: "100%",
            border: "1px solid #a1a1a1",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={product?.imgUrl}
              alt="copy"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <p className="font-bold">{product?.productName}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <FeatherIcon icon="dollar-sign" className="inline-block" />
            <p className="inline-block align-middle">{product?.price}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <p className="inline-block align-middle">{product?.quantity}</p>
          </div>
          <div
            className="flex-1 flex justify-center remove"
            onClick={() => handleEventRemove(product?.productId)}
          >
            <FeatherIcon icon="trash-2" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {cartList}
      <div className="flex justify-end mt-10 container gap-16 pr-10">
        <div className="flex items-center text-lg font-bold">
          <span className="inline-block pr-4">Total:</span>
          <FeatherIcon icon="dollar-sign" className="inline-block" />
          <p className="inline-block align-middle">
            {totalMoney.toFixed(2)} USD
          </p>
        </div>
        <div
          className="bg-green-500 text-white font-bold buy flex justify-center items-center rounded cursor-pointer"
          style={{
            width: 100,
            height: 40,
          }}
        >
          Buy
        </div>
      </div>
    </div>
  );
}
