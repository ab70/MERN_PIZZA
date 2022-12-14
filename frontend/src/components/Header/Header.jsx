import React from "react";
import { Link } from "react-router-dom";


//import css
require("./Header.css");



export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid" id="1">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <div class="collapse  navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            
            
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/Sign Up
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/account">Account</Link></li>
        
          </ul>
        </li>
           
          </ul>
        </div>
      </div>
    </nav>
    
    
  );
};


