import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hoc from "../../../components/dashboardCompo/Hoc";

const AddCategoryApi = import.meta.env.VITE_ADD_CATEGORY_API;

const AddCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    image: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCategory({
        ...category,
        image: files[0],
      });
    } else {
      setCategory({ ...category, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    const formData = new FormData();
    formData.append("image", category.image);
    formData.append("title", category.title);

    try {
      axios.post(`${AddCategoryApi}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setTimeout(() => {
        toast.success("Item added successfully!");
      }, 1000);
      navigate("/admin/category");
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else {
        console.error("Request Error:", error.message);
      }
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <>
      <Hoc />
      <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg flex flex-col space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Add Category
          </h2>

          <label htmlFor="image" className="text-gray-700 font-medium">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="border border-gray-300 p-2 rounded-md w-full"
            onChange={handleChange}
          />

          <label htmlFor="title" className="text-gray-700 font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={category.title}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Category
          </button>
        </form>
      </section>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default AddCategory;
