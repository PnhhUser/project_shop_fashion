import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/Home";
import CategoryPage from "./Pages/Category";
import DetailProductPage from "./Pages/Category/detailProduct";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryname" element={<CategoryPage />} />
          <Route
            path="category/:categoryname/:id"
            element={<DetailProductPage />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
