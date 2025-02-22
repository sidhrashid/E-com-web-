import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/error/NotFound";
import Products from "../../pages/admin/products/ShowAllProducts";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import AddProducts from "../../pages/admin/products/AddProducts";
import UpdateProducts from "../../pages/admin/products/Updateproducts";
import ShowCategory from "../../pages/admin/categories/ShowCategory";
import AddCategory from "../../pages/admin/categories/AddCategory";
import UpdateCategory from "../../pages/admin/categories/UpdateCategory";
import AdminLogin from "../../pages/admin/auth/AdminLogin";
import AllAdminUsers from "../../pages/admin/adminUser/AllAdminUsers";
import AddAdminUser from "../../pages/admin/adminUser/AddAdminUser";
import UpdateAdminUser from "../../pages/admin/adminUser/UpdateAdminUser";
function DashboardRoute() {
  return (
    <div>
      <Routes>
        {/* ------------------ Admin ---------------------- */}
        <Route path="/login" element={<AdminLogin />} />

        {/* ------------------ Products ---------------------- */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/update/:id" element={<UpdateProducts />} />

        {/* ------------------ category ---------------------- */}

        <Route path="/category" element={<ShowCategory />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />
        <Route path="/addcategory" element={<AddCategory />} />

        {/* admin user route */}
        <Route path="/alladminusers" element={<AllAdminUsers />} />
        <Route path="/addadmin" element={<AddAdminUser />} />
        <Route path="/updateadmin" element={<UpdateAdminUser />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
