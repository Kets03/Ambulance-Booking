import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SetIsLoggedinContext, IsLoggedinContext } from "../App";
import "./Navbar.css"; // For custom styles

export default function Navbar() {
  const isLoggedin = useContext(IsLoggedinContext);
  const setIsLoggedin = useContext(SetIsLoggedinContext);
  const navigate = useNavigate();

  const Logout = () => {
    axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedin(false);
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="sidebar">
      <nav className="nav flex-column vh-100">
        <a className="navbar-brand" href="/">
          <img src="./resources/logo.jpg" alt="Logo" className="sidebar-logo" />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              <i className="fas fa-concierge-bell"></i> Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </li>
        </ul>

        {isLoggedin ? (
          <button className="btn btn-outline-light mt-auto" onClick={Logout}>
            <i className="fas fa-sign-out-alt"></i> LOGOUT
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline-light mt-auto">
            <i className="fas fa-sign-in-alt"></i> LOGIN
          </Link>
        )}
      </nav>
    </div>
  );
}
