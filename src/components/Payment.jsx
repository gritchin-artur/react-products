import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useProductContext from "../hooks/useProductContext";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { handleCount, setBasket } = useProductContext();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_API + "/payment",
        {
          amount: handleCount(),
        },
      );

      const result = await stripe.confirmCardPayment(res.data.client_secret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setStatus(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setStatus("Payment successful! 🎉");
        setBasket([]);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setStatus("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="max-w-md p-6 border rounded-md shadow-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add your payment info</h2>
      <div className="p-3 border rounded mb-4 ">
        <CardElement />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : `pay ${handleCount()} $`}
      </button>

      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </form>
  );
};

export default Payment;
