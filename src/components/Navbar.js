import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
     <>
     <nav className="navbar navbar-expand-lg sticky-top  navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ml-auto">
              <NavLink to={"/"} className={"nav "}>
                Sign in
              </NavLink>
              <NavLink to={"/"} className={"nav"}>
                log out
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav> 
     </>
    );
};

export default Navbar;