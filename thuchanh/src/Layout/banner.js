/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import  "./banner.css";
class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="content-banner">
            <h1>A warm welcome!</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Call to action
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
