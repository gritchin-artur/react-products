import { Count } from "../components/Count";
import { NavButton } from "../components/NavButton";
import { ProductsList } from "../components/ProductsList";
import { Title } from "../components/Title";
import useProductContext from "../hooks/useProductContext";

export const BasketPage = () => {
  const { basket } = useProductContext();

  const countItemsById = () => {
    return basket.reduce((acc, item) => {
      if (item.id) {
        acc[item.id] = (acc[item.id] || 0) + 1;
      }
      return acc;
    }, {});
  };

  const uniqueById = Object.values(
    basket.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = item;
      }
      return acc;
    }, {}),
  );

  return (
    <div>
      <Title title="Basket" />
      <ProductsList products={uniqueById} countItemsById={countItemsById} />
      <Count />
      {basket.length > 0 && (
        <NavButton page="/payment" text="Go to payment" color="green" />
      )}
    </div>
  );
};
