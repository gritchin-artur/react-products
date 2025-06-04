import { useLocation } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";
import { IncDecButton } from "./ IncDecButton";
import { FaStar } from "react-icons/fa";

export const Product = ({ product, countItemsById = () => ({}) }) => {
  const { setBasket } = useProductContext();

  const location = useLocation().pathname === "/basket";
  const bgColor = location
    ? "bg-red-500 hover:bg-red-300"
    : "bg-blue-500 hover:bg-blue-300";

  const handlerToBasket = (e) => {
    e.preventDefault();
    setBasket((prev) => [product, ...prev]);
  };

  const handlerRemoveBasket = (e) => {
    e.preventDefault();
    setBasket((prev) => prev.filter((p) => p.id !== product.id));
  };

  const keys = Object.keys(countItemsById());

  return (
    <li className="flex flex-col md:flex-row items-center gap-6 border border-gray-200 rounded-xl shadow-lg p-6 bg-white w-full max-w-3xl mx-auto transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={
            product.images[0]
              ? product.images[0]
              : "https://www.tiffincurry.ca/wp-content/uploads/2021/02/default-product.png"
          }
          alt={product.title}
          className="w-80 h-80 object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
          {product.rating} <FaStar className="inline w-3 h-3" />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-left w-full">
        <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
        <p className="text-gray-600 font-medium">{product.brand}</p>
        <p className="text-gray-500 italic">{product.category}</p>
        <p className="text-gray-700 line-clamp-2">{product.description}</p>
        <p className="text-xl font-semibold text-gray-900">
          <span className="text-green-600">$</span> {product.price}
          {keys.includes(product.id.toString()) && (
            <span className="text-gray-500">
              {" "}
              x{countItemsById()[product.id]}
            </span>
          )}
        </p>
        <p
          className={`text-sm font-semibold ${
            product.availabilityStatus ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.availabilityStatus ? "In Stock" : "Out of Stock"}
        </p>
        {keys.includes(product.id.toString()) && (
          <IncDecButton num={countItemsById()[product.id]} product={product} />
        )}
        <button
          onClick={location ? handlerRemoveBasket : handlerToBasket}
          className={`mt-4 px-6 py-3 ${bgColor} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${
            location ? "focus:ring-red-400" : "focus:ring-blue-400"
          } transition duration-300 transform hover:scale-105 active:scale-95`}
        >
          {location ? "Remove from Basket" : "Add to Basket"}
        </button>
      </div>
    </li>
  );
};
