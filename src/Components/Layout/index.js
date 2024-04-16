import { Outlet } from "react-router-dom";
import Header from "../Header";
import { ProductProvider } from "../../Context/ProductContext";

export default function Layout() {
  return (
    <>
      <ProductProvider>
        <Header />
        <Outlet />
      </ProductProvider>
    </>
  );
}
