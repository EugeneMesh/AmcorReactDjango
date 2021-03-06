import React, { Component, Fragment } from "react";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Amcor</a>
                  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    </div>
                  </div>
                </header>
            </Fragment>
        );
    }
}

export default Header;