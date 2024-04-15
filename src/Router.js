import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/Home";
import CategoryPage from "./Pages/Category";
import DetailProductPage from "./Pages/Category/detailProduct";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
