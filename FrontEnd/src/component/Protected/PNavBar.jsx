import React from 'react'
import logo from "../img/Logo.jpg";
import UserIcon from "../img/icons8-user-100.png";
import CartIcon from "../img/cart.png";

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const PNavBar = () => {
  return (
    <div>
       <header>
          <div class="px-3 py-1 bg-black border-bottom">
            <div class="container">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <img class="bi me-2" width="90" height="90" role="img" src={logo}/>
                </a>
      
                <ul class="nav col-12 col-lg-6 my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <a href="Home" class="nav-link text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="Category" class="nav-link text-white">
                      Category
                    </a>
                  </li>
                  <li>
                    <a href="AboutUs" class="nav-link text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="Cart" class="nav-link text-white">
                    <img class="bi d-block mx-auto mb-1" width="30" height="30" src={CartIcon}/>
                    </a>
                  </li>
                  <li>
                    <a href="User" class="nav-link text-white">
                    <img class="bi d-block mx-auto mb-1" width="40" height="40" src={UserIcon}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-3 py-2 border-bottom mb-3">
            <div class="container d-flex flex-wrap justify-content-center">
              <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
              </form>
      
              <div class="text-end">
                <button type="button" class="btn btn-light text-dark me-2"><a href="LoginForm" class="nav-link text-black">Login</a></button>
                <button type="button" class="btn btn-primary"><a href="Sing_upForm" class="nav-link text-black">Sign-up</a></button>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default PNavBar
