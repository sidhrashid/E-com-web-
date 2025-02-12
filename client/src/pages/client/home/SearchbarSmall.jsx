import { FaSearch } from "react-icons/fa";

function SearchbarSmall() {
  return (
    <form className=" md:hidden sm:flex flex items-center justify-between gap-6 bg-gray-100 p-2 my-2 rounded-md w-full ">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full"
      />
      <button className="cursor-pointer">
        <FaSearch className="" />
      </button>
    </form>
  );
}

export default SearchbarSmall;
