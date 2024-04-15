import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext(null);

const ProductDispatchContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [listProduct, dispatch] = useReducer(productReducer, {
    products: initProducts,
  });

  return (
    <ProductContext.Provider value={{ listProduct }}>
      <ProductDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}

export function useProductDispatch() {
  return useContext(ProductDispatchContext);
}

const productReducer = function (listProduct, action) {
  console.log(listProduct, action);
};

const initProducts = [
  {
    id: 1,
    name: "ARA Handbags",
    price: "131.00",
    desc: "The small fold over clutch in navy. Braided strap closure. Interior pocket.All items are hand-made with natural materials and may feature slight variations or imperfections.",
    Material: "Oil-tanned cowhide",
    category: "accessories",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620e17b81ddc10d612fadb_clocl-1.jpg",
  },
  {
    id: 2,
    name: "Corey Moranis Ring",
    price: "40.00",
    desc: "Wrap ring created by Toronto based artist, Corey Moranis. All jewelry is created from lucite, a strong and crystal clear plastic. It is a lightweight material that is comfortable to wear. Each piece of jewelry is made by hand and no two pieces are exactly alike. All pieces are designed, made, and assembled by Corey Moranis in Toronto, Ontario.",
    Material: "Lucite",
    category: "jewelry",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620d7a9ca437618d078ec5_product-9-p.jpg",
  },
  {
    id: 3,
    name: "Marble Cylinder Planter",
    price: "120.00",
    desc: "Johan small cylinder planter. White marble finish.",
    Material: "Lucite",
    category: "bags",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620dc99ca4378cde079050_shoes-1.jpg",
  },
  {
    id: 12,
    name: "ARA Handbags",
    price: "131.00",
    desc: "The small fold over clutch in navy. Braided strap closure. Interior pocket.All items are hand-made with natural materials and may feature slight variations or imperfections.",
    Material: "Oil-tanned cowhide",
    category: "accessories",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620e17b81ddc10d612fadb_clocl-1.jpg",
  },
  {
    id: 21,
    name: "Corey Moranis Ring",
    price: "40.00",
    desc: "Wrap ring created by Toronto based artist, Corey Moranis. All jewelry is created from lucite, a strong and crystal clear plastic. It is a lightweight material that is comfortable to wear. Each piece of jewelry is made by hand and no two pieces are exactly alike. All pieces are designed, made, and assembled by Corey Moranis in Toronto, Ontario.",
    Material: "Lucite",
    category: "bags",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620d7a9ca437618d078ec5_product-9-p.jpg",
  },
  {
    id: 32,
    name: "Marble Cylinder Planter",
    price: "120.00",
    desc: "Johan small cylinder planter. White marble finish.",
    Material: "Lucite",
    category: "bags",
    imgUrl:
      "https://assets.website-files.com/5bb62fdea381df70e73a7df6/5e620dc99ca4378cde079050_shoes-1.jpg",
  },
];
