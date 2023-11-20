import React from 'react';
import home from "../../../Assets/Images/home.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0077b6" }}>
        <div className="container-fluid">
          <img src={home} alt="home logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Dashboard" className="nav-link active" aria-current="page" >Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/Dashboard/accounts" className="nav-link">Accounts</Link>
              </li>
              <li className="nav-item">
                <Link to="/Dashboard/transaction" className="nav-link">Transactions</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
