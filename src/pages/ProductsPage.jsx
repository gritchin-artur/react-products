import { Form } from "../components/Form";
import { Title } from "../components/Title";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { ProductsList } from "../components/ProductsList";
import useProductContext from "../hooks/useProductContext";
import { useEffect, useState } from "react";
import { getProducts } from "../api/GetProducts";

export const ProductsPage = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const { originalProd, setOriginalProd, products } = useProductContext();

  useEffect(() => {
    setLoad(true);
    getProducts()
      .then((res) => {
        if (res.length === 0) {
          setOriginalProd([]);
          setError("No results");
        } else {
          setOriginalProd(res);
          setError("");
        }
        setLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
        setLoad(false);
      });
  }, []);

  return (
    <div>
      <Title title="Find product" />
      <Form />
      <ProductsList products={products.length > 0 ? products : originalProd} />
      {load && <Loader />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
