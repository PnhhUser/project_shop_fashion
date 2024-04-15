import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/productContext";

export default function DetailProductPage() {
  const { listProduct } = useProduct();
  const param = useParams();

  const product = listProduct.products.filter(
    (product) => product.id === Number(param.id)
  );

  console.log(product);

  return <h1> detail {param.id} </h1>;
}
