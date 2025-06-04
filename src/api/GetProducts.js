import axios from "axios";

export const getProducts = async () => {
  const url = import.meta.env.VITE_URL + "/products";

  try {
    const res = await axios.get(url);
    if (res.status != 200) {
      throw new Error(
        `Failed to fetch products with status code ${res.status}`,
      );
    }
    return res.data.products;
  } catch (err) {
    console.error(err);
    return null;
  }
};
