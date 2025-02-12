import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/error/NotFound";
import Products from "../../components/dashboardCompo/Products/ShowAllProducts";
import Dashboard from "../../components/dashboardCompo/Dashboard";
function DashboardRoute() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
