import useProductContext from "../hooks/useProductContext";

export const Count = () => {
  const { handleCount } = useProductContext();

  return (
    <h2 className="text-3xl text-gray-600 font-medium">
      Sum of products:<span className="text-green-600"> ${handleCount()}</span>
    </h2>
  );
};
