import { useEffect, useState } from "react";
import axios from "axios";
import Hoc from "../Hoc";

const API_URL = import.meta.env.VITE_API_URL;

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${API_URL}/getallproducts`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddClick = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({
        ...product,
        image: files[0],
      });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <>
      <Hoc />
      <section id="content">
        <main>
          {/* Add Button */}
          <div className="flex items-center justify-between pb-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
            <button
              className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={handleAddClick}
            >
              + Add
            </button>
          </div>

          {/* Product Table */}
          <table
            className="min-w-full border border-gray-300 rounded-lg shadow-md"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-3">Id</th>
                <th className="px-4 py-3">Categories</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Price</th>
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
                  <td className="px-4 py-3 text-center">{item.category_id}</td>
                  <td className="px-4 py-3 flex justify-center">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">{item.name}</td>
                  <td className="px-4 py-3 text-center">{item.description}</td>
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
                    <button className=" px-2 py-1 border  text-blue-600 rounded-md hover:bg-gray-100 transition duration-300">
                      <i className="fa-solid fa-pencil text-sm"></i>
                    </button>

                    {/* Delete Button */}
                    <button className="px-2 py-1 text-red-600 rounded-md border hover:bg-gray-100 transition duration-300">
                      <i className="fa-solid fa-trash text-sm"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>

      {/* ===============================================Modal==================================================== */}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10001]">
          <div className="bg-white w-[37%]  max-w-3xl p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">
              Enter Product Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={product.name}
                    className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Product Name"
                  />
                </div>

                {/* Price Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price:
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="price"
                    value={product.price}
                    className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Price"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category:
                  </label>
                  <select className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home & Living</option>
                    <option value="beauty">Beauty & Health</option>
                  </select>
                </div>

                {/* Image Upload Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image:
                  </label>
                  <input
                    onChange={handleChange}
                    name="image"
                    type="file"
                    className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Description Input (Full Width) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description:
                </label>
                <textarea
                  onChange={handleChange}
                  rows="3"
                  className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Product Description"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
