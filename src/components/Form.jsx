import { useState } from "react";
import useProductContext from "../hooks/useProductContext";

export const Form = () => {
  const [preValue, setPreValue] = useState("");
  const { originalProd, setProducts } = useProductContext();

  const handleSubmit = (e, preValue) => {
    e.preventDefault();
    if (preValue === "") {
      setProducts([]);
    } else {
      setProducts(
        originalProd.filter((p) =>
          p.title.toLowerCase().includes(preValue.toLowerCase()),
        ),
      );
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, preValue)} className="mb-10">
        <input
          type="text"
          placeholder="Enter product name..."
          className="focus:outline-none focus:ring-0 mr-10"
          value={preValue}
          onChange={(e) => setPreValue(e.target.value)}
        />
        <button
          type="submit"
          className="border:none cursor-pointer hover:text-orange-500 hover:scale-110 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </>
  );
};
