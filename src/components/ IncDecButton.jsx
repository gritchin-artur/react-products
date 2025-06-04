import useProductContext from "../hooks/useProductContext";

export const IncDecButton = ({ num, product }) => {
  const { setBasket } = useProductContext();

  const handlerIncrement = () => {
    setBasket((prev) => [product, ...prev]);
  };

  const handleDecrement = () => {
    setBasket((prev) =>
      prev.filter(
        (item, index) =>
          item.id !== product.id ||
          index !== prev.findIndex((i) => i.id === product.id),
      ),
    );
  };
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDecrement}
        className="text-3xl text-red-400 rounded-md hover:text-red-500 disabled:opacity-50 cursor-pointer"
        disabled={num <= 0}
      >
        -
      </button>
      <p className="text-gray-900 w-6 text-center">{num}</p>
      <button
        onClick={handlerIncrement}
        className="text-2xl text-green-400 rounded-md hover:text-green-500 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};
