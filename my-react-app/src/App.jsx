import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import ProductDetail from "./components/sections/ProductDetail";
// import ProductGrid from "./components/sections/hero/ProductGrid";
import Category from "./components/sections/category";
import Cart from "./components/sections/Cart";
import CategoryPage from "./components/sections/category";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/products" element={<ProductGrid />} /> */}
      <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category/:style" element={<CategoryPage />} /> 
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;