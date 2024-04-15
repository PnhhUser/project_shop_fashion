import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Index";
import { ProductProvider } from "../../Context/productContext";

export default function Layout() {
  return (
    <>
      <Header />
      <ProductProvider>
        <Outlet />
      </ProductProvider>
      <Footer />
    </>
  );
}
