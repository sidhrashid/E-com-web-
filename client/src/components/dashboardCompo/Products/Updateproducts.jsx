import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Hoc from "../Hoc";

const UpdateApi = import.meta.env.VITE_UPDATE_API;
const CategoryApi = import.meta.env.VITE_CATEGORY_API;
const GetProById = import.meta.env.VITE_GET_BY_ID_API;

function UpdateProducts() {
  const [products, setProducts] = useState({
    name: "",
    price: "",
    image: "",
    category_id: "",
    description: "",
  });

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(`${GetProById}${id}`);
        console.log(res.data[0]);
        setProducts(res.data[0]);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchAllProducts();
  }, [id]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get(CategoryApi);
        setData(res.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchAllData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProducts({
        ...products,
        image: files[0],
      });
    } else {
      setProducts({ ...products, [name]: value });
    }
  };

  const handleEditorChange = (name) => (event, editor) => {
    const data = editor.getData();
    setProducts((prevData) => ({
      ...prevData,
      [name]: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(products);
    const formData = new FormData();
    formData.append("name", products.name);
    formData.append("price", products.price);
    formData.append("image", products.image);
    formData.append("category_id", products.category_id);
    formData.append("description", products.description);

    try {
      const response = await axios.put(`${UpdateApi}${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Server Response:", response.data);
      alert("Product added successfully");
      navigate("/admin/products");
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else {
        console.error("Request Error:", error.message);
      }
    }
  };

  return (
    <>
      <Hoc />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add Products</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={products.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={products.price}
              onChange={handleChange}
              placeholder="Price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Category ID
              </label>
              <select
                name="category_id"
                value={products.category_id}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select a category</option>
                {data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            {/* CKEditor for Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description:
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={products.description}
                onChange={handleEditorChange("description")}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProducts;
