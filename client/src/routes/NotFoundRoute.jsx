import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import Layout from "../components/Layout";

function NotFoundRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NotFoundRoute;
