import { Product } from "./Product";

export const ProductsList = ({ products, countItemsById }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 &&
        products.map((product, index) => (
          <Product
            key={index}
            product={product}
            countItemsById={countItemsById}
          />
        ))}
    </ul>
  );
};
