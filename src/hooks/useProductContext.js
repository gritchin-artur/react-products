import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export default useProductContext;
