import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div>eshop</div>
      <div>
        <form>
          <input type="text" placeholder="search"></input> <CiSearch />
        </form>
      </div>
      <div>
        <FaShoppingCart />
      </div>
      <div>Login | register</div>
      <div>
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
