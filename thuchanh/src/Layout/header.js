/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
            Start Bootstrap
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
