import React from "react";
import { Link, router } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top shadow-sm navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand px-4" to="#">
          <img src="images/Perfect-Click.png" className="w-250 w-sm-250" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link cabin  f-bold  col-blue " href="#">
                PHOTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cabin f-bold px-4 col-blue" href="#">
                VIDEOS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cabin f-bold col-blue"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                HOW IT WORKS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link cabin  f-bold  col-blue " href="#">
                SIGN IN
              </a>
            </li>
            <button type="button" className="btn btn-orange ms-3 px-4 btn-sm fw-bold">Create a Package</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
