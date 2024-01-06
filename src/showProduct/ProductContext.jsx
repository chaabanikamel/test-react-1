import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const AddProduct = (newProduct) => {
    setProductsData([...productsData, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ setProductsData, AddProduct, productsData}}>
      {children}
    </ProductContext.Provider>
  );
};
