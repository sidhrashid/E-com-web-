import { useEffect, useState, useContext } from "react";
import SearchbarSmall from "../../pages/client/home/SearchbarSmall";
import ProductCard from "./ProductCard";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";

const GET_API = import.meta.env.VITE_GET_API;

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useContext(SearchContext); 

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${GET_API}`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Apply search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <>
      <SearchbarSmall />
      <div className="max-w-6xl mx-auto px-4 py-6 mb-7">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          All Products
        </h1>

        <div className="w-h-screen flex flex-wrap justify-evenly gap-x-3 gap-y-7">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <p className="text-center text-red-500">No products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
