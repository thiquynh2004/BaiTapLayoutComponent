/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./item.css";
class Item extends Component {
  render() {
    return (
    //   <div className="item">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i class="fa fa-stream"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    Fresh new layout
                  </h1>
                  <p className="card-text">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i className="fa fa-cloud-download-alt"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    Free to download
                  </h1>
                  <p className="card-text">
                    As always, Start Bootstrap has a powerful collectin of free
                    templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i className="fa fa-cloud-download-alt"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    Jumbotron hero header
                  </h1>
                  <p className="card-text">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i class="fab fa-bootstrap"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    Feature boxes
                  </h1>
                  <p className="card-text">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i class="fa fa-code"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    Simple clean code
                  </h1>
                  <p className="card-text">
                    We keep our dependencies up to date and squash bugs as they
                    come!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <i class="fa fa-check-circle"></i>
                  </div>
                  <h1 className="card-subtitle mb-2 text-muted">
                    A name you trust
                  </h1>
                  <p className="card-text">
                    Start Bootstrap has been the leader in free Bootstrap
                    templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    );
  }
}

export default Item;
