import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import NavIcon from "./NavIcon";
import SignUp from "./SignUpButton";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="h-20 bg-[rgba(231,229,229,0.64)]  md:px-8 lg:px-16 xl:px-16 2xl:px-64 fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-lg ">
      <div className="flex items-center sm:justify-evenly justify-between h-full w-full px-4 md:px-8 ">
        <div className="flex items-center gap-3 ">
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="" width={80} height={24} />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Searchbar />
          <SignUp />
          <NavIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
