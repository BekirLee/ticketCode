import React from "react";
import { CiSearch, CiUser, CiShoppingBasket, CiHeart } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import "./navbar.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";

const Navbar = () => {
  return (
    <div className="container">
      <header className="headerNav">
        <div className="infoNum">
          <IoCallOutline style={{ color: "green" }} />
          <a style={{ color: "#000" }} href="#">
            +00 123 456 789
          </a>
        </div>
        <div className="logoNav">
          <a href="/">
            <img
              src="https://htmldemo.net/pronia/pronia/assets/images/logo/dark.png"
              alt=""
            />
          </a>
        </div>
        <div className="wrapperNav">
          <Link to="/basket">
            <CiShoppingBasket />
          </Link>
          <CiHeart />
          <CiSearch />
          <Link to="/admin">
            <CiUser />
          </Link>
        </div>
      </header>

      <div className="headerHero">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/pages">Pages</Link>
          {/* <Link to='/admin'>Admin</Link> */}
          <Link to="/contact">Contact Us</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
