import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hoc from "../Hoc";
import axios from "axios";

const ShowCategory = () => {
  const [product, setProduct] = useState([]);

  const GetCategoryApi = import.meta.env.VITE_CATEGORY_API;
  const DeleteCategoryApi = import.meta.env.VITE_DELETE_CATEGORY_API;

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const res = await axios.get(GetCategoryApi);
      setProduct(res.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      await axios.delete(`${DeleteCategoryApi}/${id}`);
      fetchAllData();
    } catch (error) {
      console.error(
        "Error deleting category:",
        error.response?.data || error.message
      );
      alert("Failed to delete category. Please try again.");
    }
  };

  return (
    <>
      <Hoc />
      <section id="content" className="p-4 flex justify-center">
        <main className="w-full max-w-5xl">
          {/* Add Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
              Categories
            </h2>
            <NavLink to="/admin/addcategory" className="mt-2 sm:mt-0">
              <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-blue-600 transition">
                + Add
              </button>
            </NavLink>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg shadow-md table-auto">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                  <th className="px-4 py-3">Id</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => (
                  <tr
                    key={item.id}
                    className="border border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-center">{item.id}</td>
                    <td className="px-4 py-3 flex justify-center">
                      <img
                        src={`/uploads/${item.image}`}
                        alt="product"
                        className="w-[60px] h-[60px] object-cover rounded-full border border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">{item.title}</td>
                    <td className="px-4 py-3 text-center">
                      <label className="relative inline-block w-10 h-5">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors duration-300"></span>
                        <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300"></span>
                      </label>
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      {/* Edit Button */}
                      <NavLink to={`/admin/updatecategory/${item.id}`}>
                        <button className="px-2 py-1 border text-blue-600 rounded-md hover:bg-gray-100 transition duration-300">
                          <i className="fa-solid fa-pencil text-sm"></i>
                        </button>
                      </NavLink>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-2 py-1 text-red-600 rounded-md border hover:bg-gray-100 transition duration-300"
                      >
                        <i className="fa-solid fa-trash text-sm"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </>
  );
};

export default ShowCategory;
