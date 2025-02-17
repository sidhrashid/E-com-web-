import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/error/NotFound";
import Products from "../../components/dashboardCompo/Products/ShowAllProducts";
import Dashboard from "../../components/dashboardCompo/Dashboard";
import AddProducts from "../../components/dashboardCompo/Products/AddProducts";
import UpdateProducts from "../../components/dashboardCompo/Products/Updateproducts";
import ShowCategory from "../../components/dashboardCompo/Products/ShowCategory";
import AddCategory from "../../components/dashboardCompo/Products/AddCategory";
import UpdateCategory from "../../components/dashboardCompo/Products/UpdateCategory";
function DashboardRoute() {
  return (
    <div>
      <Routes>

        {/* ------------------ Products ---------------------- */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/update/:id" element={<UpdateProducts />} />


       {/* ------------------ category ---------------------- */}
       
        <Route path="/category" element={<ShowCategory />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
