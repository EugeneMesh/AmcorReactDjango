import React, { Component } from "react";
import Content from "./Content";

class Body extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                  <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                          Графики и таблица
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                          Карта завода
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <Content/>
              </div>
            </div>
        );
    }
}

export default Body;