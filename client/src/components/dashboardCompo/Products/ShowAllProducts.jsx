import { useEffect, useState } from "react";
import axios from "axios";
import Hoc from "../Hoc";
import { NavLink } from "react-router-dom";

const GET_API = import.meta.env.VITE_GET_API;
const DeleteApi = import.meta.env.VITE_DELETE_API;

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${GET_API}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`${DeleteApi}${id}`);
      fetchProduct();
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response?.data || error.message
      );
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <>
      <Hoc />
      <section id="content">
        <main>
          {/* Add Button */}
          <div className="flex items-center justify-between pb-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
            <NavLink to="/admin/add">
              <button className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-lg shadow-md hover:bg-blue-600 transition">
                + Add
              </button>
            </NavLink>
          </div>

          {/* Product Table */}
          <table
            className="min-w-full border border-gray-300 rounded-lg shadow-md table-fixed"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-3 w-16">Id</th>
                <th className="px-4 py-3 w-24">Categories</th>
                <th className="px-4 py-3 w-24">Image</th>
                <th className="px-4 py-3 w-32">Name</th>
                <th className="px-4 py-3 w-56">Description</th>{" "}
                <th className="px-4 py-3 w-24">Price</th>
                <th className="px-4 py-3 w-24">Status</th>
                <th className="px-4 py-3 w-24">Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr
                  key={item.id}
                  className="border border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-center">{item.id}</td>
                  <td className="px-4 py-3 text-center">{item.category_id}</td>
                  <td className="px-4 py-3 flex justify-center">
                    <img
                      src={`/uploads/${item.image}`}
                      alt="product"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">{item.name}</td>

                  <td className="px-4 py-3 text-center truncate overflow-hidden whitespace-nowrap max-w-[200px]">
                    {item.description}
                  </td>

                  <td className="px-4 py-3 text-center">{item.price}</td>
                  <td className="px-4 py-3 text-center">
                    <label className="relative inline-block w-8 h-4">
                      <input type="checkbox" className="peer sr-only" />
                      <span className="block w-full h-full bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-500 transition-colors duration-300"></span>
                      <span className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md transform peer-checked:translate-x-4 transition-transform duration-300"></span>
                    </label>
                  </td>

                  <td className="text-center space-x-1">
                    {/* Edit Button */}
                    <NavLink to={`/admin/update/${item.id}`}>
                      <button className=" px-2 py-1 border  text-blue-600 rounded-md hover:bg-gray-100 transition duration-300">
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
        </main>
      </section>
    </>
  );
};

export default Product;
