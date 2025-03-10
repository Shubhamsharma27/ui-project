import Img from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

//---------------------------------- NAVBAR---------------------------------------------------
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border rounded-2xl mt-5 mx-4 my-2 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <img
          alt="Logo"
          className="h-8 w-8 cursor-pointer"
          height="40"
          src={Img}
          width="40"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer ">
            Product
            <i className="ml-2">
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </button>
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer">
            Customers
            <i className="ml-2">
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </button>
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer">
            Resources
            <i className="ml-2">
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </button>
        </div>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer">
            About us
            <i className="ml-2">
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </button>
        </div>
        <a className="text-gray-700 hover:text-gray-900" href="#">
          Plans
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          className=" bg-pink-100 text-orange-500 px-4 rounded py-2 hover:text-orange-700"
          href="#"
        >
          Login
        </a>
        <a
          className="bg-orange-300 text-white px-4 py-2 rounded hover:bg-orange-500"
          href="#"
        >
          Request a Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
