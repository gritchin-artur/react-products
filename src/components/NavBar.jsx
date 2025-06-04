import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { basket } = useProductContext();
  return (
    <div className="flex justify-between border-b border-black pb-2 mb-4">
      <FiShoppingBag size={24} color="orange" className="text-black" />
      <ul className="flex gap-10">
        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out"
        >
          Home
        </li>
        <li
          onClick={() => navigate("products")}
          className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out"
        >
          Products
        </li>
        <li
          onClick={() => navigate("basket")}
          className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out"
          style={{ color: basket.length > 0 ? "red" : "black" }}
        >
          <FiShoppingCart className="text-xl text-black inline-block mr-2" />(
          {basket.length})
        </li>
      </ul>
    </div>
  );
};
