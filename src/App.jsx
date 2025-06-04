import "./App.css";
import ProductProvider from "./providers/ProductProvider";
import { ErrorMessage } from "./components/ErrorMessage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { NavBar } from "./components/NavBar";
import { BasketPage } from "./pages/BasketPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaymentPage } from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route
            path="*"
            element={<ErrorMessage message="Not found" className="error" />}
          />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
