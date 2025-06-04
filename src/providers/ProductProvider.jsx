import { useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [originalProd, setOriginalProd] = useState([]);
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("basket", JSON.stringify(basket));
    }, 1000);
  }, [basket]);

  const handleCount = () => {
    return basket
      .reduce((sum, product) => {
        return sum + (product?.price || 0);
      }, 0)
      .toFixed(2);
  };

  return (
    <ProductContext.Provider
      value={{
        originalProd,
        setOriginalProd,
        products,
        setProducts,
        basket,
        setBasket,
        handleCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
