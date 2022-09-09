import React from "react";
import { logoutUser } from "../actions/userActions";

import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userstate;
  const dispatch=useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>!! Pizzaa House !!</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* conditional rendering */}

              {currentUser ? (
              <div className="dropdown">
              <a class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {currentUser.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="">Orders</a>
                <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>LogOut</li></a>
               
              </div>
            </div>
              ) : (
                <li className="nav-item">
                  <a className="navbar-brand " href="/login">
                    <b>Login</b>
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="navbar-brand" href="/cart">
                  <b>Cart {cartstate.cartItems.length}</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
