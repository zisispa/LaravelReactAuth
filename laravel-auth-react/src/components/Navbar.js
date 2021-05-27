import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ user, setLogin }) => {
  let links;

  const logout = async () => {
    await axios.post("/logout", {});

    setLogin();
  };

  links = user ? (
    <>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
      </ul>
      <ul className='navbar-nav my-2 my-lg-0'>
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  ) : (
    <>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
      </ul>
      <ul className='navbar-nav my-2 my-lg-0'>
        <li className='nav-item'>
          <Link to='/login' className='nav-link'>
            Sign in
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            Sign up
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>{links}</nav>
  );
};

export default Navbar;
