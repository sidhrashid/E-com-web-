import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetProByIdAPI = import.meta.env.VITE_GET_BY_ID_API;

const ProductsDetail = () => {
  const [products, setProducts] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      fetchProducts();
    }
  }, [id]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${GetProByIdAPI}${id}`);
      setProducts(res.data[0] || null);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!products) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const getDescriptionWithReadMore = () => {
    const description = products.description;
    
    if (description.includes("braided cab")) {
      const parts = description.split("braided cab");
      return (
        <>
          {parts[0]}braided cab
          {!showFullDescription && (
            <>
              ...
              <span
                onClick={() => setShowFullDescription(true)}
                className="text-blue-500 ml-1 cursor-pointer hover:underline"
              >
                Read More
              </span>
            </>
          )}
          {showFullDescription && (
            <span
              dangerouslySetInnerHTML={{
                __html: parts.slice(1).join("braided cab")
              }}
            />
          )}
        </>
      );
    } else {
      return (
        <>
          {!showFullDescription ? (
            description.substring(0, 150) + "..."
          ) : (
            <span
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          )}
          {!showFullDescription && (
            <span
              onClick={() => setShowFullDescription(true)}
              className="text-blue-500 ml-1 cursor-pointer hover:underline"
            >
              Read More
            </span>
          )}
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex justify-center">
          <img
            src={`/uploads/${products.image}`}
            alt={products.name}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center p-4">
          <h2 className="text-2xl md:text-3xl font-bold">{products.name}</h2>

          <div className="text-gray-600 mt-2">
            {getDescriptionWithReadMore()}
          </div>

          {showFullDescription && (
            <button
              onClick={() => setShowFullDescription(false)}
              className="text-blue-500 mt-2 hover:underline"
            >
              Read Less
            </button>
          )}

          <p className="text-xl md:text-2xl font-semibold mt-4">
            ${products.price}
          </p>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
