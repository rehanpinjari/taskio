import React from "react";
import "./Navbar.css";
import TaskioLogo from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/TaskioLogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <>
    {/* Navigation menu section */}
    <div className="navbar-box container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              src={TaskioLogo}
              className="bi"
              width={100}
              role="img"
              aria-label="Bootstrap"
              alt="Taskio"
            />
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink exact to="/main" className="nav-link">
              Features
            </NavLink>
          </li>

          <li>
            {/* <NavLink exact to="/about" className="nav-link"> */}
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/comingsoon"
            >
            <a href="#" className="nav-link">
              Pricing
            </a>
            </Link>
            {/* </NavLink> */}
          </li>
          <li>
          <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/comingsoon"
            >
            <a href="#" className="nav-link">
              Testimonials
            </a>
            </Link>
          </li>
          <li>
          <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/comingsoon"
            >
            <a href="#" className="nav-link">
              Contact
            </a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  </>
);

export default Navbar;
