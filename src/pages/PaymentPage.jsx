import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Payment from "../components/Payment";
import { NavButton } from "../components/NavButton";

export const PaymentPage = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);

  return (
    <Elements stripe={stripePromise}>
      <Payment />
      <NavButton page="/basket" text="Back to basket" color="blue" />
    </Elements>
  );
};
