import React from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
      <div className="container-fluid ">
        <a className="navbar-brand px-4" href="#">
          ImageGallery
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
        <form className="d-flex w-25" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
