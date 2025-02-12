import { Link } from "react-router-dom";

function SignUpButton() {


  return (
    <button
      
      className="bg-black
     hover:bg-gray-700
      text-white font-bold 
      py-2 px-4 rounded sm:text-sm"
    >
      <Link to="/signup"> Sign up </Link>
    </button>
  );
}

export default SignUpButton;
