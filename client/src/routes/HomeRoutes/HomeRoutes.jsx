import {  Route, Routes } from "react-router-dom";
import Home from "../../pages/client/home";
import Layout from "../../components/clientCompo/Layout";
import NotFound from "../../pages/error/NotFound";
import SignUp from "../../pages/client/Signup/SignUp";
import Login from "../../pages/client/Login/Login";
import Cart from "../../components/clientCompo/Cart";
import CheckOutPage from "../../components/clientCompo/CheckOutPage";
import OrderTracking from "../../components/clientCompo/OrderTracking";
import CategoryProducts from "../../components/clientCompo/CategoryProducts";
import ProductDetail from "../../components/clientCompo/ProductsDetail";
import AllProducts from "../../components/clientCompo/AllProducts";
function HomeRoutes() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categoryproducts" element={<CategoryProducts />} />
            <Route path="/productsdetail" element={<ProductDetail />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/ordertrack" element={<OrderTracking />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    
    </div>
  );
}

export default HomeRoutes;
